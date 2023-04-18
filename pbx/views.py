from django.shortcuts import render, redirect


# Create your views here.
def pbx(request):
    return render(request, "pbx.html")
