from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include('myapp.urls')),
]

# https://qiita.com/Bashi50/items/9e1d62c4159f065b662b#2214-limit-%E5%8F%96%E5%BE%97%E6%95%B0%E3%82%92%E6%8C%87%E5%AE%9A

# /api/job-listing/search?query=〇〇株式会社
# queryset = JobListing.objects.filter(name__contains='〇〇株式会社')

# /api/job-listing?page=2
# queryset = JobListing.objects.all()[:100]
# queryset = JobListing.objects.all()[101:100]
# queryset = JobListing.objects.all()[100 * (page - 1) + 1:100]

