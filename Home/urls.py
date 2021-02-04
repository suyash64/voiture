from django.contrib import admin
from django.urls import path
from Home import views

urlpatterns = [
    path('', views.index, name='Home'),
    path('model', views.model, name='model'),
    path('pricing', views.pricing, name='pricing'),
]
