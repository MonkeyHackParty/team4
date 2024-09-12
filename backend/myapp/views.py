from rest_framework import viewsets
from .models import JobListing
from .serializers import JobListingSerializer

class JobListingViewSet(viewsets.ModelViewSet):
   queryset = JobListing.objects.all()
   serializer_class = JobListingSerializer
