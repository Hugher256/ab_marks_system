from rest_framework import routers, serializers, viewsets
from .models import Marks


class MarksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marks
        fields = '__all__'
