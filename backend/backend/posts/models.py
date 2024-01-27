import uuid
from django.db import models
from django.contrib.auth.models import User
from category.models import Category

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    created_at=models.DateTimeField(auto_now_add=True)
    created_by=models.ForeignKey(User, on_delete=models.CASCADE)
    description=models.TextField()
    category=models.ForeignKey(Category, on_delete=models.CASCADE)
    upvotes=models.IntegerField(default=0)
    thumbnail=models.CharField(null=True, max_length=300)
    price=models.IntegerField()
    file_link=models.CharField(null=True, max_length=300)
    terms=models.CharField(null=True, max_length=2000)
    
    class Meta:
        ordering = ['-created_by']

    def __str__(self):
        return self.name
# Create your models here.
