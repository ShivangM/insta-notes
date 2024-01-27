from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Post Details", {"fields": ["name", "description", "created_by", "terms",
         "category", "upvotes", "thumbnail", "file_link", "price"]}),
    ]
    list_display = ["name", "description"]
    search_fields = ["name"]


admin.site.register(Post, PostAdmin)
