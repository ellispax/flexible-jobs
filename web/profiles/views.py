from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import GeneralUserProflie, CompanyUserProfile
from .serializers import GeneralUserProfileSerializer, CompanyUserProfileSerializer

# Create your views here.
@api_view(['GET'])
def get_general_user_profile(request, pk):   #display general user profile
    try:
        profile = GeneralUserProflie.objects.get(user=pk)
    except GeneralUserProflie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = GeneralUserProfileSerializer(profile)
    return Response(serializer.data)


@api_view(['GET'])    #display company Rep user profile 
def get_company_user_profile(request, pk):
    try:
        profile = CompanyUserProfile.objects.get(user=pk)
    except CompanyUserProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CompanyUserProfileSerializer(profile)
    return Response(serializer.data)