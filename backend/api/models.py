from django.db import models
from datetime import datetime

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=200)
    roll = models.CharField(max_length=20, unique=True)
    email = models.EmailField(max_length=254, unique=True)

    def __str__(self):
        return str(self.name) + "_" + str(self.roll)


class Lect(models.Model):
    code = models.CharField(max_length=20)
    end_time = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return str(self.code) + "_" + str(self.end_time)


class Code_Student(models.Model):
    email = models.EmailField(max_length=254, default="")
    code = models.CharField(max_length=20)
    end_time = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return str(self.code) + "_" + str(self.end_time)
