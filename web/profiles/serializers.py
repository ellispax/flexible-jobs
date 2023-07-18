from rest_framework import serializers
from .models import GeneralUserProflie, CompanyUserProfile, Skill, EducationProfile, WorkExperienceProfile

class GeneralUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralUserProflie
        fields = '__all__'

class CompanyUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyUserProfile
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = '__all__'
        
class EducationProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationProfile
        fields = '__all__'

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperienceProfile
        fields = '__all__'