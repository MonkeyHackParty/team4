import requests
from django.core.management.base import BaseCommand
from myapp.models import JobListing

class Command(BaseCommand):
    help = 'Fetch job data from Yahoo API and store in database'

    def handle(self, *args, **options):
        url = "https://job.yahooapis.jp/v1/furusato/company/"
        app_id = "dj00aiZpPUg3dXd2YzNEakNTSSZzPWNvbnN1bWVyc2VjcmV0Jng9NGU-"
        
        start = 340101
        results_per_page = 100
        while True:
            params = {
                'appid': app_id,
                'results': results_per_page,
                'start': start,
            }
            
            response = requests.get(url, params=params)
            if response.status_code == 200:
                data = response.json()
                results = data.get('results', [])
                
                if not results:
                    break
                
                for job in results:
                    local_government_code = job.get('localGovernmentCode', 0)
                    
                    average_age_str = job.get('averageAge', '')
                    average_age = float(average_age_str) if average_age_str else 0.0
                    
                    # 各数値フィールドの変換
                    def safe_float(value):
                        try:
                            return float(value)
                        except (ValueError, TypeError):
                            return 0.0
                    
                    def safe_int(value):
                        try:
                            return int(value)
                        except (ValueError, TypeError):
                            return 0
                    
                    # デバッグ用ログ
                    self.stdout.write(self.style.SUCCESS(f'Processing job ID: {job.get("yCompanyId", "")}'))
                    self.stdout.write(self.style.SUCCESS(f'Average Age: {average_age}'))
                    
                    # フィールドのデフォルト値を設定する際に必要な処理を追加
                    JobListing.objects.update_or_create(
                        y_company_id=job.get('yCompanyId', ''),
                        defaults={
                            'corporation_id': safe_int(job.get('corporationId', '')),
                            'name': job.get('name', ''),
                            'name_kana': job.get('nameKana', ''),
                            'name_en': job.get('nameEn', ''),
                            'postal_code': job.get('postalCode', ''),
                            'local_government_code': local_government_code,
                            'prefecture': job.get('prefecture', ''),
                            'city': job.get('city', ''),
                            'town': job.get('town', ''),
                            'block': job.get('block', ''),
                            'building': job.get('building', ''),
                            'president_position': job.get('presidentPosition', ''),
                            'president_name': job.get('presidentName', ''),
                            'capital': safe_int(job.get('capital', '')),
                            'employees': safe_int(job.get('employees', '')),
                            'industry_code': job.get('industryCode', ''),
                            'listed': job.get('listed', False),
                            'stock_code': safe_int(job.get('stockCode', '')),
                            'average_age': average_age,
                            'female_rate': safe_float(job.get('femaleRate', '')),
                            'average_annual_income': safe_int(job.get('averageAnnualIncome', '')),
                            'paid_holiday_digestibility': safe_float(job.get('paidHolidayDigestibility', '')),
                            'turnover_rate': safe_float(job.get('turnoverRate', '')),
                            'female_manager_rate': safe_float(job.get('femaleManagerRate', '')),
                            'handicapped_employee_rate': safe_float(job.get('handicappedEmployeeRate', '')),
                            'average_duration': safe_float(job.get('averageDuration', '')),
                            'sales': safe_int(job.get('sales', '')),
                            'current_earnings': safe_int(job.get('currentEarnings', '')),
                            'branch': job.get('branch', ''),
                            'facebook_url': job.get('facebookUrl', ''),
                            'twitter_url': job.get('twitterUrl', ''),
                            'tel': job.get('tel', ''),
                            'web_url': job.get('webUrl', ''),
                            'pr_text': job.get('prText', ''),
                            'remarks': job.get('remarks', ''),
                            'cp_name': job.get('cpName', ''),
                            'y_company_id': job.get('yCompanyId', ''),
                        }
                    )
                
                start += results_per_page
                self.stdout.write(self.style.SUCCESS(f'Successfully fetched and stored job data starting from position {start - results_per_page}'))
            else:
                self.stdout.write(self.style.ERROR(f'Failed to fetch data: {response.status_code}'))
                break
