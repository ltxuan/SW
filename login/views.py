from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth


def home(request):
    return render(request, "home.html")


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        confirm_password = request.POST["confirm_password"]
        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.info(request, "Username is already taken")
                return redirect("register")
            else:
                user = User.objects.create_user(
                    username=username,
                    password=password,
                )
                user.save()
                return redirect("login")
        else:
            messages.info(request, "Both passwords are not matching")
            return redirect("register")
    else:
        return render(request, "registration.html")


def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect("pbx")
        else:
            messages.info(request, "Invalid Username or Password")
            return redirect("login")
    else:
        return render(request, "login.html")


def logout_user(request):
    auth.logout(request)
    return redirect("home")
