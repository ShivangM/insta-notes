from django.urls import path

from . import views

app_name = "category"
urlpatterns = [
    path("", views.Categorys.as_view(), name="index"),
    path("<str:pk>", views.CategoryDetail.as_view(), name="detail")
]