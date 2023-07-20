from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import *
from .serializers import *

# Create your views here.

@api_view(['GET'])
def job_list(requst):
    try:
        jobs = Job.objects.all()
    except Job.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = JobSerializer(jobs, many = True)
    return Response(serializer.data)


@api_view(['POST'])
def create_job(request):
    company_id = request.data.get('company')
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        return Response({'error': 'Company does not exist'}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = JobSerializer(data=request.data)
    if serializer.is_valid():
        serializer.validated_data['company'] = company
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def create_job(request):
#     serializer = JobSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)


@api_view(['GET'])
def job_details(request,pk):
    pass
