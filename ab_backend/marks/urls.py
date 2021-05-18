from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MarksViewset

router = DefaultRouter()
router.register('marks', MarksViewset, 'marks')

urlpatterns = [
    path('', include(router.urls))
]
