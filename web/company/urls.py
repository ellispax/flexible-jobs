from django.urls import path
from .views import *

urlpatterns = [
    
    path('create',create_company, name="create-company"),
    path('details', company, name='company')
    
]