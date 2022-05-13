from django.db.models import fields
from rest_framework import serializers
from .models import SubjectCode

class SubjectCodeSerializer(serializers.ModelSerializer):
	class Meta:
		model = SubjectCode
		fields = ('subject_code', 'created_at')
