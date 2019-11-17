from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('boards', views.get_all_boards, name='boards'),
    url(r'^tasks/(?P<board_id>[\w]+)', views.get_all_tasks, name='tasks'),
    url(r'^new/board', views.add_board, name='add_board'),
    url(r'^new/task', views.add_task, name='add_task'),
    url(r'^board', views.modify_board, name='modify_board'),
    url(r'^task', views.modify_task, name="modify_task")
]