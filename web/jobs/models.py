from django.db import models
from django.contrib.auth import get_user_model
from company.models import Company

# Create your models here.

User = get_user_model()
class Job(models.Model):
    title                            = models.CharField(max_length=100)
    company                          = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="company_job")
    description                      = models.TextField()
    employement_type                 = models.CharField(max_length=100)
    location                         = models.TextField()
    salary                           = models.FloatField()
    posted_by                        = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_post")
    date_posted                      = models.DateTimeField(verbose_name="date_posted", auto_now_add=True)
    is_active                        = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title}"

    