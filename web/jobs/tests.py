from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from company.models import Company

class CreateJobViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.company_data = {
            'name': 'Company XYZ',
            'email': 'company@example.com',
            'industry': 'IT',
            'description': 'A software development company',
            'address': '123 Main St',
            'phone_number': '+123456789',
            'company_size': 'Large',
            'established_date': '2022-01-01',
        }
        self.company = Company.objects.create(**self.company_data)

    def test_create_job_with_valid_payload(self):
        payload = {
            'title': 'Software Engineer',
            'company': self.company.id,
            'description': 'We are seeking a skilled software engineer...',
            'employement_type': 'Full-time',
            'location': 'New York',
            'salary': 80000.0,
            'posted_by': 1,
            'date_posted': '2023-07-12T10:00:00Z',
            'is_active': True,
        }
        response = self.client.post('/jobs/create-job', payload)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_job_with_invalid_payload(self):
        payload = {
            'title': '',
            'company': self.company.id,
            'description': 'We are seeking a skilled software engineer...',
            'employement_type': 'Full-time',
            'location': 'New York',
            'salary': 80000.0,
            'posted_by': 1,
            'date_posted': '2023-07-12T10:00:00Z',
            'is_active': True,
        }
        response = self.client.post('/jobs/create-job', payload)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        # Additional assertions based on the expected error response

    # Add more test cases as needed

