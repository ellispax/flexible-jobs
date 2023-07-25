from django.db import models
from django.contrib.auth import get_user_model
from company.models import Company
# Create your models here.

User = get_user_model()

class GeneralUserProflie(models.Model): #  general user profile with use details 
    user                        = models.ForeignKey(User, on_delete=models.CASCADE, related_name='general_user_profile')
    firstName                   = models.CharField(max_length=25)
    lastName                    = models.CharField(max_length=25)
    gender                      = models.CharField(max_length=6)
    about                       = models.TextField( null=True, blank=True)
    status                      = models.CharField(max_length=100, null=True, blank=True)
    address                     = models.TextField()
    phoneNumber                 = models.CharField(max_length=25, default='+263 xxx xxx xxxx')
    profile_image               = models.ImageField(max_length=255, upload_to='static/profileImages',null=True, blank=True)
    resume                      = models.FileField(upload_to='static/resumes/', null=True, blank=True) # this might be edited later to be in its own model with other doc, like certificates

    def __str__(self):
        return f"{self.firstName} {self.lastName} (User: {self.user.username})"

class EducationProfile(models.Model): #user education background
    user                        = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_education')
    institution                 = models.CharField(max_length=100)
    degree                      = models.CharField(max_length=100)
    field                       = models.CharField(max_length=100)
    start_date                  = models.DateField()
    end_date                    = models.DateField()
    description                 = models.TextField()

    def __str__(self):
        return f"{self.institution}"

class WorkExperienceProfile(models.Model): #user work background
    user                        = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_workexperience")
    position                    = models.CharField(max_length=50)
    experience_type             = models.CharField(max_length=50)
    company_name                = models.CharField(max_length=50)
    industry                    = models.CharField(max_length=50)
    description                 = models.TextField()
    location                    = models.CharField(max_length=100)
    is_active                   = models.BooleanField()
    start_date                  = models.DateField()
    end_date                    = models.DateField()

    def __str__(self):
        return f"User: {self.user.username}, Position: {self.position}"


class Skill(models.Model):          #skills model to store  skills 
    name                        = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class UserSkill(models.Model): #wil store user skills based on the skills saved in the skills table
    user                        = models.ForeignKey(User, on_delete=models.CASCADE)
    skill                       = models.ForeignKey(Skill, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} - {self.skill.name}"


class CompanyUserProfile(models.Model): #profile for the company user 
    user                        = models.ForeignKey(User, on_delete=models.CASCADE, related_name='company_user_profile')
    firstName                   = models.CharField(max_length=25)
    lastName                    = models.CharField(max_length=25)
    gender                      = models.CharField(max_length=6)
    phoneNumber                 = models.CharField(max_length=15, default='+263 xxx xxx xxxx')
    company                     = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='user_company')
    role                        = models.CharField(max_length=30)
    profile_image               = models.ImageField(max_length=255, upload_to='static/profileImages',null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} from {self.company}"
    


