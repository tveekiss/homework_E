# Generated by Django 5.0.6 on 2024-06-26 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0003_remove_chat_name_alter_chat_messages'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='chats',
            field=models.ManyToManyField(blank=True, to='chat.chat'),
        ),
    ]
