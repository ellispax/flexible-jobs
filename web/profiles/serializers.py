from rest_framework import serializers
from .models import GeneralUserProflie, CompanyUserProfile, Skill, UserSkill,EducationProfile, WorkExperienceProfile
from users.models import User

# class GeneralUserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = GeneralUserProflie
#         fields = '__all__'


# class SkillSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Skill
#         fields = '__all__'
        
# class EducationProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = EducationProfile
#         fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class UserSkillSerializer(serializers.ModelSerializer):
    skill = SkillSerializer()

    class Meta:
        model = UserSkill
        fields = ('skill',)

class WorkExperienceProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperienceProfile
        fields = '__all__'

class EducationProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationProfile
        fields = '__all__'

class GeneralUserProfileSerializer(serializers.ModelSerializer):
    profile = EducationProfileSerializer(many=True, source='user_profile')
    work_experience_profiles = WorkExperienceProfileSerializer(many=True, source='work_profile')

    skills = UserSkillSerializer(many=True, source='skill_profile')

    class Meta:
        model = GeneralUserProflie
        fields = '__all__'
class CompanyUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyUserProfile
        fields = '__all__'
