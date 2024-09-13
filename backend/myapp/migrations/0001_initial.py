# Generated by Django 5.1.1 on 2024-09-11 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='JobListing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=255)),
                ('job_id', models.CharField(max_length=50, unique=True)),
                ('local_government_code', models.CharField(max_length=6)),
            ],
        ),
    ]
