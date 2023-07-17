from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

# Create your tests here.

class CreateCompanyViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_create_company_with_valid_data(self):
        payload = {
            'name': 'Example Company',
            'email': 'info@example.com',
            'website': 'https://www.example.com',
            'industry': 'Technology',
            'description': 'This is an example company.',
            'address': '123 Main St',
            'phone_number': '+123456789',
            'company_size': '100 Employees',
            'established_date': '2022-01-01',
        }

        response = self.client.post('/company/create', payload)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # Additional assertions based on the expected response

    def test_create_company_with_invalid_data(self):
        payload = {
            'name': '',  # Invalid: Empty name
            'email': 'info@example.com',
            'website': 'https://www.example.com',
            'industry': 'Technology',
            'description': 'This is an example company.',
            'address': '123 Main St',
            'phone_number': '+123456789',
            'company_size': '100 Employees',
            'established_date': '2022-01-01',
        }

        response = self.client.post('/company/create', payload)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        # Additional assertions based on the expected response

    # Add more test cases as needed

