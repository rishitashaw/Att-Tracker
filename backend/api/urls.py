from django.urls import path
from .views import *

urlpatterns = [
    path("saveCode", saveCode.as_view(), name="saveCode"),
    path("markAttendance", markAttendance.as_view(), name="markAttendance"),
    path("checkAttendance", attendance.as_view(), name="checkAttendance"),
]
