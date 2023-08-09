from django.db import models


class Category(models.Model):
    category = models.CharField(max_length=40)

    def __str__(self):
        return self.category


class Iva(models.Model):
    tipo = models.CharField(max_length=50)
    percent = models.FloatField()

    def __str__(self):
        return self.tipo


class Product(models.Model):
    product = models.CharField(max_length=40)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.FloatField()
    iva = models.ForeignKey(Iva, on_delete=models.CASCADE)

    def __str__(self):
        return self.product
