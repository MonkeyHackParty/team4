from rest_framework import viewsets
from .models import JobListing
from .serializers import JobListingSerializer

class JobListingViewSet(viewsets.ModelViewSet):
   queryset = JobListing.objects.all()
   serializer_class = JobListingSerializer

   def get_queryset(self):
      queryset = JobListing.objects.all()
      name = self.request.query_params.get('name')
      prefecture = self.request.query_params.get('prefecture')
      industry_code = self.request.query_params.get('industry_code')
      corporation_id = self.request.query_params.get('corporation_id')

      if name:
         queryset = queryset.filter(name__icontains=name)
      
      if prefecture:
         queryset = queryset.filter(prefecture__icontains=prefecture)

      if industry_code:
         queryset = queryset.filter(industry_code__icontains=industry_code)

      if corporation_id:
         queryset = queryset.filter(corporation_id=corporation_id)

      seen_names = set()
      unique_listings = []
      for listing in queryset:
         if listing.name not in seen_names:
               unique_listings.append(listing)
               seen_names.add(listing.name)

      return unique_listings[:100]  # 最大100件に制限