from django.urls import path


from .views import ProductGenericAPIView, FileUploadView

urlpatterns = [
    path('products', ProductGenericAPIView.as_view()),
    path('products/<int:pk>', ProductGenericAPIView.as_view()),
    path('upload', FileUploadView.as_view()),
]
