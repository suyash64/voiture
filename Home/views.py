from django.shortcuts import render, HttpResponse
from .models import Supercars


def index(request):
    return render(request, 'index.html')


def model(request):
    supercarss = Supercars.objects.all()
    params = {'supercars': supercarss}
    n=len(supercarss)
    return render(request, 'model.html', params)


def pricing(request):
    return HttpResponse("this is pricing page")
