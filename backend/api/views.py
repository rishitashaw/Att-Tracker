from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import *
from .serializers import *
from django.http import HttpResponse
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from dateutil import parser
import csv

# Create your views here.


def check_duration(end_time):
    tm = timezone.now()
    time_last = parser.parse(end_time)
    if tm <= time_last:
        return False
    return True


class saveCode(generics.GenericAPIView):
    serializer_class = LectSerializer

    def post(self, request):
        try:
            temp = Lect.objects.get(
                code=request.data.get("code"), end_time=request.data.get("end_time")
            )
        except Lect.DoesNotExist:
            temp = None
        if temp is None:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response("Already exists!", status=status.HTTP_400_BAD_REQUEST)


class markAttendance(generics.GenericAPIView):
    serializer_class = Code_StudentSerializer

    def post(self, request):
        try:
            student = Student.objects.get(email=request.data.get("email"))
        except Student.DoesNotExist:
            student = None
        if student is not None:
            try:
                lect = Lect.objects.get(
                    code=request.data.get("code"), end_time=request.data.get("end_time")
                )
            except Lect.DoesNotExist:
                lect = None
            if lect is not None:
                time_last = request.data.get("end_time")
                temp1 = check_duration(time_last)
                if temp1:
                    return Response(
                        "Time span over", status=status.HTTP_400_BAD_REQUEST
                    )
                serializer = self.get_serializer(data=request.data)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response("No lecture matches!", status=status.HTTP_400_BAD_REQUEST)
        return Response("Student does not exist!", status=status.HTTP_400_BAD_REQUEST)


# @csrf_exempt
# def DownloadStudents(request):
#     response = HttpResponse(content_type="text/csv")
#     response["Content-Disposition"] = 'attachment; filename="teams.csv"'
#     writer = csv.writer(response)
#     code_students = Code_Student.objects.filter(code=request.POST.get("code")).filter(
#         end_time=request.POST.get("end_time")
#     )
#     for code_student in code_students:
#         student = Student.objects.get(email=code_student.email)
#         print(student)
#         writer.writerow(
#             [
#                 student.name,
#                 student.roll,
#                 student.email,
#             ]
#         )
#     return response
class attendance(APIView):
    def post(self, request):
        code_students = Code_Student.objects.filter(
            code=request.data.get("code"), end_time=request.data.get("end_time")
        )
        students_array = []
        for code_student in code_students:
            student = Student.objects.get(email=code_student.email)
            # print(student)
            students_array.append(
                {
                    "name": str(student.name),
                    "roll": str(student.roll),
                    "email": str(student.email),
                }
            )
        return Response(students_array, status=status.HTTP_200_OK)
