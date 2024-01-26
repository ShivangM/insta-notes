
from django.db import models
import uuid

class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    slug = models.CharField(max_length=200)
    class Meta:
        ordering = ['-name']

    def __str__(self):
        return self.name
# Create your models here.
