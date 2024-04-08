from rest_framework import serializers
from .models import Product, Category, Iva

class productSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        read_only=False, slug_field="category", queryset=Category.objects.all()
    )
    iva = serializers.SlugRelatedField(
        read_only=False, slug_field="tipo", queryset=Iva.objects.all()
    )
    class Meta:
        model = Product
        fields = "__all__"

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class ivaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Iva
        fields = "__all__"
