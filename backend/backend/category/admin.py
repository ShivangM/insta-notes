from django.contrib import admin
from .models import Category

class CategoryAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Category Details", {"fields": ["name", "slug"]}),
    ]
    list_display = ["name"]
    search_fields = ["name"]

admin.site.register(Category, CategoryAdmin)