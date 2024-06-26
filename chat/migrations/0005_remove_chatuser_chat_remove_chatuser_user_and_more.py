# Generated by Django 5.0.6 on 2024-06-26 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0004_userprofile_chats'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chatuser',
            name='chat',
        ),
        migrations.RemoveField(
            model_name='chatuser',
            name='user',
        ),
        migrations.AlterField(
            model_name='chat',
            name='messages',
            field=models.ManyToManyField(blank=True, related_name='chat_messages', to='chat.message'),
        ),
        migrations.AlterField(
            model_name='chat',
            name='users',
            field=models.ManyToManyField(related_name='chat_users', to='chat.userprofile'),
        ),
        migrations.DeleteModel(
            name='ChatMessage',
        ),
        migrations.DeleteModel(
            name='ChatUser',
        ),
    ]
