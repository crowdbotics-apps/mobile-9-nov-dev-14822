# Generated by Django 2.2.17 on 2020-11-09 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="name",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
