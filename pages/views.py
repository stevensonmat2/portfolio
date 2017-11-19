from django.shortcuts import render, HttpResponse


def home(request):
    # name = 'matt'
    return render(request, 'pages/index.html', {})


def angryDice(request):

    return render(request, 'pages/angryDice.html', {})


def projects(request):

    return render(request, 'pages/projects.html', {})


def earthquakeMap(request):

    return render(request, 'pages/earthquakeMap.html', {})


def weather_index(request):

    return render(request, 'pages/weather_index.html', {})
