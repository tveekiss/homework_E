# Generated by Django 5.0.6 on 2024-06-26 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_alter_userprofile_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chat',
            name='name',
        ),
        migrations.AlterField(
            model_name='chat',
            name='messages',
            field=models.ManyToManyField(blank=True, to='chat.message'),
        ),
    ]
