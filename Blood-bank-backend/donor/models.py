from django.db import models
from datetime import date
from django.utils import timezone
from recipient.models import Recipient
import uuid

# Create your models here.
class Donor(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    firstName = models.CharField(default="",max_length=30)
    lastName = models.CharField(default="",max_length=30)
    dob = models.DateField()
    bloodGroup = models.CharField(default="",max_length=30)
    phoneNumber = models.TextField(default='',max_length=10)
    email = models.TextField(default="",max_length=30)
    lastDonated = models.DateField(null=True)
    address  = models.TextField(default="",max_length=500)
    
    

    def __str__(self) :
        return self.firstName
    



   

    


class MatchedDonor(models.Model):
    id  = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    recipient = models.UUIDField(null=True,default=None)
    donor = models.UUIDField( null=True,default=None)
    status = models.CharField(default="Pending",max_length=10)
    donated = models.CharField(default="No",max_length=10)

    def __str__(self):
        return self.id

