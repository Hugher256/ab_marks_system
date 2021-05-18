from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Marks
from .serializers import MarksSerializer

# Create your views here.


class MarksViewset(viewsets.ModelViewSet):
    queryset = Marks.objects.all()
    serializer_class = MarksSerializer
    permisssion_class = []

    def list(self, request):
        if request.query_params.get('search'):
            search_term = request.query_params.get('search')
            queryset = Marks.objects.filter(name__icontains=search_term)
            serializer = self.serializer_class(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        queryset = Marks.objects.all().order_by('-total_marks')
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
