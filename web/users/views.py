from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from django.contrib.auth import authenticate


from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from profiles.models import GeneralUserProflie, CompanyUserProfile
from profiles.serializers import GeneralUserProfileSerializer, CompanyUserProfileSerializer



# Create your views here.
User = get_user_model()
@api_view(['POST'])
def register(request):                  #register a general user (job applicant)
    userData = {
        'email': request.data.get('email'),
        'username': request.data.get('username'),
        'password': request.data.get('password')
    }
    profiledata = {
        'firstName': request.data.get('firstName'),
        'lastName': request.data.get('lastName'),
        'gender': request.data.get('gender'),
        'address': request.data.get('address'),
        'phoneNumber': request.data.get('phoneNumber'),
        'profile_image': request.data.get('profile_image')
    }

    user_serializer = UserSerializer(data=userData)
    general_profile_serializer = GeneralUserProfileSerializer(data=profiledata)

    if user_serializer.is_valid() and general_profile_serializer.is_valid():
        user = user_serializer.save()
        general_profile_serializer.save(user=user)

        return Response(user_serializer.data, status=status.HTTP_201_CREATED)

    return Response({
        'user': user_serializer.errors,
        'general_profile': general_profile_serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def register(request):                  #register a general user (job applicant)
#     userData = {
#         'email': request.data.get('email'),
#         'username': request.data.get('username'),
#         'password': request.data.get('password')
#     }
#     profiledata = {
#         'firstName': request.data.get('firstName'),
#         'lastName': request.data.get('lastName'),
#         'gender': request.data.get('gender'),
#         'address': request.data.get('address'),
#         'phoneNumber': request.data.get('phoneNumber'),
#         'profile_image': request.data.get('profile_image')
#     }

#     user_serializer = UserSerializer(data=userData)
#     general_profile_serializer = GeneralUserProfileSerializer(data=profiledata)

#     if user_serializer.is_valid():              #user serializer used to create the Auth User account for login
#         user = user_serializer.save()

#         # Update profiledata with user ID
#         profiledata['user'] = user.id
#         general_profile_serializer = GeneralUserProfileSerializer(data=profiledata)

#         try:
#             general_profile_serializer.is_valid(raise_exception=True)
#             general_profile_serializer.save()   #profile serializer for creating their profile after their auth account has been created
#         except serializers.ValidationError as e:
#             # Rollback user creation
#             user.delete()
#             return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)

#         return Response(user_serializer.data, status=status.HTTP_201_CREATED)

#     return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def custom_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(email=email, password=password)

    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'email': user.email,
            'username': user.username,
        })
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def create_company_user(request):       #Company Rep User view 
    userData = {
        'email': request.data.get('email'),
        'username': request.data.get('username'),
        'password': request.data.get('password')
    }
    profiledata = {
        'firstName': request.data.get('firstName'),
        'lastName': request.data.get('lastName'),
        'gender': request.data.get('gender'),
        'address': request.data.get('address'),
        'phoneNumber': request.data.get('phoneNumber'),
        'company': request.data.get('company'),
        'role':request.data.get('role'),
        'profile_image': request.data.get('profile_image')
    }
    

    serializer = UserSerializer(data=userData)
    company_user_profile_serializer = CompanyUserProfileSerializer(data=profiledata)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = User.objects.create_company_user(email=email, username=username, password=password)

        profiledata['user'] = user.id
        company_user_profile_serializer=CompanyUserProfileSerializer(data=profiledata)

        try:
            company_user_profile_serializer.is_valid(raise_exception=True)
            company_user_profile_serializer.save()
        except serializers.ValidationError as e:
            # Rollback user creation
            user.delete()
            return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_superuser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = User.objects.create_superuser(email=email, username=username, password=password)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)