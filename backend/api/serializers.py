from rest_framework import serializers
from .models import *


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ("name", "roll", "email")


class LectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lect
        fields = ("code", "end_time")

    def create(self, data):
        lect = Lect(
            code=data["code"],
            end_time=data["end_time"],
        )
        lect.save()
        print(lect)
        return lect


class Code_StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Code_Student
        fields = (
            "email",
            "code",
            "end_time",
        )

    def create(self, data):
        lecture = Code_Student(
            email=data["email"],
            code=data["code"],
            end_time=data["end_time"],
        )
        lecture.save()
        return lecture
