from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=200)
    roll_number = models.CharField(max_length=200)
    username = models.CharField(max_length=500)

    def __str__(self):
        return self.roll_number