from rest_framework import serializers
from .views import *
from .models import *
from company.serializers import CompanySerializer

#create serializers 

class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    class Meta:
        model = Job
        fields = '__all__'