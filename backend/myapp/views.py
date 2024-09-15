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

   def calculate_black_tokens(self, company):
      black_tokens = 0
      max_black_tokens = 0

      # Employees logic
      if company.employees > 0:
         if company.employees < 10:
            black_tokens += 2
         elif company.employees < 50:
            black_tokens += 1
         max_black_tokens += 2

      # Average age
      if company.average_age > 0:
         if company.average_age < 25:
            black_tokens += 2
         elif company.average_age < 30:
            black_tokens += 1
         elif company.average_age >= 60:
            black_tokens += 2
         elif company.average_age >= 50:
            black_tokens += 1
         max_black_tokens += 2

      # Female ratio
      if company.female_rate > 0:
         if company.female_rate < 0.1:
            black_tokens += 2
         elif company.female_rate < 0.2:
            black_tokens += 1
         elif company.female_rate >= 0.8:
            black_tokens += 2
         elif company.female_rate >= 0.7:
            black_tokens += 1
         max_black_tokens += 2

      # Average annual income
      if company.average_annual_income > 0:
         if company.average_annual_income < 3000:
            black_tokens += 2
         elif company.average_annual_income < 4000:
            black_tokens += 1
         max_black_tokens += 2

      # Paid holiday usage rate
      if company.paid_holiday_digestibility > 0:
         if company.paid_holiday_digestibility < 30:
            black_tokens += 2
         elif company.paid_holiday_digestibility < 40:
            black_tokens += 1
         max_black_tokens += 2

      # Turnover rate
      if company.turnover_rate > 0:
         if company.turnover_rate >= 30:
            black_tokens += 3
         elif company.turnover_rate >= 25:
            black_tokens += 2
         elif company.turnover_rate >= 20:
            black_tokens += 1
         max_black_tokens += 3

      # Female manager ratio
      if company.female_manager_rate > 0:
         if company.female_manager_rate < 10:
            black_tokens += 2
         elif company.female_manager_rate < 15:
            black_tokens += 1
         max_black_tokens += 2

      # Average length of service
      if company.average_duration > 0:
         if company.average_duration < 2:
            black_tokens += 2
         elif company.average_duration < 3:
            black_tokens += 1
         max_black_tokens += 2

      # If no tokens were added, return "判定不可"
      if black_tokens == 0:
         print("判定不可")
         return "判定不可"

      return black_tokens

   def retrieve(self, request, *args, **kwargs):
      instance = self.get_object()
      serializer = self.get_serializer(instance)

      # Calculate black tokens for the company
      black_tokens = self.calculate_black_tokens(instance)

      # Append the black tokens to the response data
      data = serializer.data
      data['black_tokens'] = black_tokens

      return Response(data)
