# Generated by Django 4.1.5 on 2023-07-27 03:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0006_educationprofile_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='workexperienceprofile',
            name='profile',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='work_profile', to='profiles.generaluserproflie'),
            preserve_default=False,
        ),
    ]