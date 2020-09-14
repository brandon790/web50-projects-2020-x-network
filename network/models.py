from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class UserFollowing(models.Model):
    user_id = models.ForeignKey("User", related_name="following", on_delete=models.CASCADE)
    following_user_id = models.ForeignKey("User", related_name="followers",on_delete=models.CASCADE)



class Post(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField()

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user.post,
            "content": self.content,
            "timestamp": self.timestamp.strftime("%B %e %Y, %I:%M %p"),
            "likes": self.likes
        }
