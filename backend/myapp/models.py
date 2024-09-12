from django.db import models

class JobListing(models.Model):
    corporation_id = models.BigIntegerField(null=True, blank=True)  # 大きな整数を扱うためのフィールド
    name = models.CharField(max_length=255, null=True, blank=True)  # 会社名
    name_kana = models.CharField(max_length=255, null=True, blank=True)  # 会社名のカナ
    name_en = models.CharField(max_length=255, null=True, blank=True)  # 会社名の英語表記
    postal_code = models.CharField(max_length=7, null=True, blank=True)  # 郵便番号
    local_government_code = models.IntegerField(null=True, blank=True)  # 地方行政コード
    prefecture = models.CharField(max_length=255, null=True, blank=True)  # 都道府県
    city = models.CharField(max_length=255, null=True, blank=True)  # 市区町村
    town = models.CharField(max_length=255, null=True, blank=True)  # 町名
    block = models.CharField(max_length=255, null=True, blank=True)  # 番地
    building = models.CharField(max_length=255, null=True, blank=True)  # 建物名
    president_position = models.CharField(max_length=255, null=True, blank=True)  # 代表者の役職
    president_name = models.CharField(max_length=255, null=True, blank=True)  # 代表者の名前
    capital = models.IntegerField(null=True, blank=True)  # 資本金
    employees = models.IntegerField(null=True, blank=True)  # 従業員数
    industry_code = models.CharField(max_length=10, null=True, blank=True)  # 業種コード
    listed = models.BooleanField(null=True, blank=True)  # 上場しているかどうか
    stock_code = models.IntegerField(null=True, blank=True)  # 上場企業コード
    average_age = models.FloatField(null=True, blank=True)  # 平均年齢
    female_rate = models.FloatField(null=True, blank=True)  # 女性比率
    average_annual_income = models.IntegerField(null=True, blank=True)  # 平均年収
    paid_holiday_digestibility = models.FloatField(null=True, blank=True)  # 有給休暇取得率
    turnover_rate = models.FloatField(null=True, blank=True)  # 離職率
    female_manager_rate = models.FloatField(null=True, blank=True)  # 女性管理職比率
    handicapped_employee_rate = models.FloatField(null=True, blank=True)  # 障害者雇用率
    average_duration = models.FloatField(null=True, blank=True)  # 平均勤続年数
    sales = models.IntegerField(null=True, blank=True)  # 売上高
    current_earnings = models.IntegerField(null=True, blank=True)  # 現在の利益
    branch = models.CharField(max_length=255, null=True, blank=True)  # 支店
    facebook_url = models.URLField(null=True, blank=True)  # FacebookのURL
    twitter_url = models.URLField(null=True, blank=True)  # TwitterのURL
    tel = models.CharField(max_length=20, null=True, blank=True)  # 電話番号
    web_url = models.URLField(null=True, blank=True)  # WebサイトのURL
    pr_text = models.TextField(null=True, blank=True)  # PRテキスト
    remarks = models.TextField(null=True, blank=True)  # 備考
    cp_name = models.CharField(max_length=255, null=True, blank=True)  # 情報提供元の名前
    y_company_id = models.CharField(max_length=50, null=True, blank=True)  # 会社ID

    def __str__(self):
        return f"{self.name} ({self.corporation_id})"
