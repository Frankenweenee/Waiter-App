from rest_framework import viewsets, generics
from .serializer import categorySerializer, productSerializer, ivaSerializer
from .models import Product, Iva, Category
import json
from django.http import JsonResponse

class formulario_articulo(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = productSerializer

class formulario_categoria(viewsets.ModelViewSet):
    serializer_class = categorySerializer
    queryset = Category.objects.all()

class formulario_iva(viewsets.ModelViewSet):
    serializer_class = ivaSerializer
    queryset = Iva.objects.all()
