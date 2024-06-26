# Generated by Django 5.0.6 on 2024-06-26 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0007_remove_chat_messages_remove_message_chats'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='chats',
        ),
        migrations.AlterField(
            model_name='chat',
            name='users',
            field=models.ManyToManyField(related_name='chats', to='chat.userprofile'),
        ),
    ]