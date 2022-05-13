from django.db.models import fields
from rest_framework import serializers
from .models import SubjectCode, Student

class StudentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Student
		fields = ('name', 'roll_number', 'username')

class SubjectCodeSerializer(serializers.ModelSerializer):
	StudentRoot=StudentSerializer(many=True)
	class Meta:
		model = SubjectCode
		fields = ('subject_code', 'created_at')

