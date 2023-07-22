from django.urls import path
from .views import *

urlpatterns = [
    
    path('general-profile',get_general_user_profile, name="general-profile"),
    path('company-profile', get_company_user_profile, name='create-company-user' ),
    path('education-profile', user_education_profile, name='education-profile'),
    path('add-skill', skills, name='add-skill'),
    
]