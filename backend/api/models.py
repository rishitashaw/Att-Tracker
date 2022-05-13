from django.db import models
from datetime import datetime
# Create your models here.
class SubjectCode(models.Model):
    subject_code = models.CharField(max_length=10)
    created_at = models.DateTimeField(default=datetime.now)
    def __str__(self):
        self.subject_code