from django.db import models

# Create your models here.
class Board(models.Model):
    board_id = models.CharField(max_length=50, primary_key=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    def __str__(self):
        return self.title

class Task(models.Model):
    task_id = models.CharField(max_length=20, primary_key=True)
    completed = models.BooleanField(null=False, default=False)
    description = models.CharField(max_length=200)
    board = models.ForeignKey(Board,  on_delete=models.CASCADE)
    def __str__(self):
        return self.description