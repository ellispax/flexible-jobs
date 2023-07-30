from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.contrib.auth.decorators import login_required
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import GeneralUserProflie, CompanyUserProfile, Skill, EducationProfile, WorkExperienceProfile
from .serializers import GeneralUserProfileSerializer, CompanyUserProfileSerializer, SkillSerializer, EducationProfileSerializer, WorkExperienceProfileSerializer

from main.permissions import IsGeneralUser, IsCompanyUser, IsAdminUser
from rest_framework.authtoken.models import Token


# Create your views here.

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsGeneralUser])
def get_user_profile(request):
    user = request.user

    try:
        profile = GeneralUserProflie.objects.get(user=user)
    except GeneralUserProflie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = GeneralUserProfileSerializer(profile)
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsGeneralUser])

def get_general_user_profile(request):
    user = request.user  # This will give you the authenticated user

    try:
        profile = GeneralUserProflie.objects.get(user=user)
    except GeneralUserProflie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = GeneralUserProfileSerializer(profile)
    return Response(serializer.data)



@api_view(['POST', 'GET', 'PUT', 'DELETE'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsGeneralUser])
def user_education_profile(request):
    if request.method == 'POST':
        user = request.user  # This will give you the authenticated user
        profile = GeneralUserProflie.objects.get(user=user)  # Get the profile of the user

        data = {
            'user': user.id,
            'profile': profile.id,
            'institution': request.data.get('institution'),
            'degree': request.data.get('degree'),
            'field': request.data.get('field'),
            'start_date': request.data.get('start_date'),
            'end_date': request.data.get('end_date'),
            'description': request.data.get('description'),
        }

        serializer = EducationProfileSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':               #get all education records for the logged in user 
        serializer = EducationProfileSerializer(profile)
        return Response(serializer.data)

    elif request.method == 'PUT':               #edit specific education record
        serializer = EducationProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':            #delete specific educationrecord
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST', 'GET', 'PUT', 'DELETE'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsGeneralUser])
def user_work_profile(request):
    if request.method == 'POST':
        user = request.user  # This will give you the authenticated user
        profile = GeneralUserProflie.objects.get(user=user)  # Get the profile of the user

        data = {
            'user': user.id,
            'profile': profile.id,
            'position': request.data.get('position'),
            'experience_type': request.data.get('experience_type'),
            'company_name': request.data.get('company_name'),           
            'industry': request.data.get('industry'),            
            'description': request.data.get('description'),
            'location': request.data.get('location'),
            'is_active': request.data.get('is_active'),
            'start_date': request.data.get('start_date'),
            'end_date': request.data.get('end_date')
        }

        serializer = WorkExperienceProfileSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':               #get all education records for the logged in user 
        serializer = WorkExperienceProfileSerializer(profile)
        return Response(serializer.data)

    elif request.method == 'PUT':               #edit specific education record
        serializer = WorkExperienceProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':            #delete specific educationrecord
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET'])    #display company Rep user profile 
@authentication_classes([TokenAuthentication])  # Use TokenAuthentication
@permission_classes([IsAuthenticated, IsCompanyUser]) 
def get_company_user_profile(request):
    user = request.user
    try:
        profile = CompanyUserProfile.objects.get(user=users)
    except CompanyUserProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CompanyUserProfileSerializer(profile)
    return Response(serializer.data)

@api_view(['GET', 'POST'])              #this will be used to store skills. refinement to be required later 
def skills(request):
    if request.method == 'GET':
       
        skills = Skill.objects.all()
        
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        
        serializer = SkillSerializer(data=request.data)
        if serializer.is_valid():
            skill = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)