from . import views
from django.urls import include, path

urlpatterns = [
    path('register/', views.register ),
    path('send_otp/',views.send_otp),
    path('verify_otp/',views.verify_otp),
    path('confirm_donor/',views.confirm_donor)
]