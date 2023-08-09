from django.urls import path, include
from rest_framework import routers
from productApi import views

router = routers.DefaultRouter()
router.register(r'lista', views.formulario_articulo, 'lista')
router.register(r'iva', views.formulario_iva, 'iva')
router.register(r'categoria', views.formulario_categoria, 'categoria')

urlpatterns = [
    path('formulario/', include(router.urls)),
]