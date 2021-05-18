from django.db import models

# Create your models here.


class Marks(models.Model):
    roll_no = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    marks_maths = models.PositiveIntegerField()
    marks_physics = models.PositiveIntegerField()
    marks_chemistry = models.PositiveIntegerField()
    total_marks = models.PositiveIntegerField()
    percentage = models.FloatField()

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.percentage = round(self.percentage, 2)
        super(Marks, self).save(*args, **kwargs)
