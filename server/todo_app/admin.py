from django.contrib import admin

# Register your models here.
from .models import Board, Task

admin.site.register(Board)
admin.site.register(Task)
