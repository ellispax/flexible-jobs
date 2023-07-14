from django.db import models

# Create your models here.
class Company(models.Model):
    name                        = models.CharField(max_length=100)
    email                       = models.EmailField()
    website                     = models.URLField(blank=True)
    industry                    = models.CharField(max_length=100)
    description                 = models.TextField()
    logo                        = models.ImageField(upload_to='static/company/logos', blank=True)
    address                     = models.TextField()
    phone_number                = models.CharField(max_length=25,default='+263 xxx xxx xxx')
    company_size                = models.CharField(max_length=100)
    established_date            = models.DateField()

    # Additional fields related to the company can be added here

    def __str__(self):
        return self.name