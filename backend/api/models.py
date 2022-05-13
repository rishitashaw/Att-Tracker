from django.db import models
from datetime import datetime
# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=200)
    roll_number= models.CharField(max_length=200)
    username=models.CharField(max_length=200)
    def __str__(self):
        self.roll_number
class SubjectCode(models.Model):
    student=models.ForeignKey(Student,on_delete=models.DO_NOTHING, related_name='StudentRoot')
    subject_code = models.CharField(max_length=10)
    created_at = models.DateTimeField(default=datetime.now)
    def __str__(self):
        self.subject_code

