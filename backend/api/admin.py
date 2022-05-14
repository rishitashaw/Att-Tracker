from django.contrib import admin
from .models import Student, Lect, Code_Student

# Register your models here.
admin.site.register(Student)
admin.site.register(Lect)
admin.site.register(Code_Student)
