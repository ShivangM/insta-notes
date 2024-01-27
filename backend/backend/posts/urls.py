from django.urls import path

from . import views

app_name = "posts"
urlpatterns = [
    path("", views.Posts.as_view(), name="index"),
    path("<str:pk>", views.PostDetail.as_view(), name="detail")
]