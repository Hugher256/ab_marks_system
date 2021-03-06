# Generated by Django 3.2.3 on 2021-05-18 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Marks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roll_no', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=100)),
                ('marks_maths', models.PositiveIntegerField()),
                ('marks_physics', models.PositiveIntegerField()),
                ('marks_chemistry', models.PositiveIntegerField()),
                ('total_marks', models.PositiveIntegerField()),
                ('percentage', models.FloatField()),
            ],
        ),
    ]
