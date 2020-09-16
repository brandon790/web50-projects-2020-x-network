from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
import json
from django.http import JsonResponse
from datetime import datetime



from .models import User, Post, UserFollowing


def index(request):
    all_posts = Post.objects.all().reverse()
    return render(request, "network/index.html", {
            "all_posts": all_posts
        })    


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "network/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "network/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "network/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "network/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "network/register.html")

@csrf_exempt
@login_required
def new_post(request):
    all_posts = Post.objects.all().order_by('-timestamp')
    content = (request.POST.get('post_content'))
    if request.method == "POST":
        new_post = Post.objects.create(
            user=request.user,
            content=content,
            likes='0')
        return render(request, "network/index.html", {
            "all_posts": all_posts
        })

@csrf_exempt
@login_required
def profile(request):
    profile = request.GET.get("user")
    like_count = (UserFollowing.objects.filter(user_id=profile).count())

    if request.method == "POST":
        new_follow = UserFollowing.objects.create(
            user_id= profile,
            following_user_id= request.user
        )
        return render(request, "network/index.html")
    elif request.method == "GET":
        return render(request, "network/profile.html", {
        "username" : profile,
        "total_likes" : like_count
    })



    