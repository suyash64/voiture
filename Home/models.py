from django.db import models


class Supercars(models.Model):
    name = models.CharField(max_length=50)
    price = models.CharField(max_length=50)
    desc = models.TextField()
    imgages = models.CharField(max_length=60)

    def __str__(self):
        return self.name


# Create your models here.
