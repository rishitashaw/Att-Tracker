from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SubjectCode
from .serializers import SubjectCodeSerializer

from rest_framework import serializers
from rest_framework import status

@api_view(['GET'])
def ApiOverview(request):
	api_urls = {
		'all_items': '/',
		'Search by SubjectCode': '/?subject_code=subject_code_name',
		'Add': '/create',
	}

	return Response(api_urls)


@api_view(['POST'])
def add_items(request):
	subject_code = SubjectCodeSerializer(data=request.data)

	# validating for already existing data
	if SubjectCode.objects.filter(**request.data).exists():
		raise serializers.ValidationError('This data already exists')

	if subject_code.is_valid():
		subject_code.save()
		return Response(subject_code.data)
	else:
		return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def view_items(request):
	
	# checking for the parameters from the URL
	if request.query_params:
		subject_code = SubjectCode.objects.filter(**request.query_param.dict())
	else:
		subject_code = SubjectCode.objects.all()

	# if there is something in items else raise error
	if subject_code:
		data = SubjectCodeSerializer(subject_code)
		return Response(data)
	else:
		return Response(status=status.HTTP_404_NOT_FOUND)

