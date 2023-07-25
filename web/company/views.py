from django.shortcuts import render
from rest_framework import status, serializers
from rest_framework.decorators import api_view,authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import CompanySerializer
from .models import Company
from profiles.models import CompanyUserProfile
from main.permissions import IsGeneralUser, IsCompanyUser, IsAdminUser


# Create your views here.

@api_view(['GET','POST','DELETE'])         #creating a new company
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
def create_company(request):
    user = request.user
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CompanySerializer(data=request.data)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'POST':
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        company.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsCompanyUser])           #get company profile using pk
def company(request):
    try:
        user = request.user # get authenticated user        
        
        company_profile = CompanyUserProfile.objects.get(user=user)     # Retrieve the CompanyUserProfile related to the user
        
        company_id = company_profile.company_id      # Use the company_id to fetch the company's profile        
        company = Company.objects.get(pk=company_id     )# Replace the pk value with company_id
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    
    
