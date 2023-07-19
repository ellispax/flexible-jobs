from django.urls import path
from .views import *

urlpatterns = [
    path('', job_list, name='jobs-list'),
    path('job-list', job_list, name='jobs-list'),
    path('create-job', create_job, name='create-job'),
    
]
