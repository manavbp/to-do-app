from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt
from .models import Board, Task


def get_all_boards(request):
    boards = list(Board.objects.all().values())
    return JsonResponse(boards, safe=False)

    
def get_all_tasks(request, board_id):
    tasks = list(Task.objects.filter(board_id=board_id).values())
    return JsonResponse(tasks, safe=False)


@csrf_exempt
def add_board(request):
    title = request.POST['title']
    description = request.POST['description']
    board_id = request.POST['id']
    board = Board(board_id = board_id, description = description, title = title)
    board.save()
    return HttpResponse(status=200)


@csrf_exempt
def add_task(request):
    task_id = request.POST['task_id']
    description = request.POST['description']
    board_id = request.POST['board_id']
    completed = request.POST['completed']
    task = Task(board_id = board_id, description = description, completed = completed, task_id=task_id)
    task.save()
    return HttpResponse(status=200)

@csrf_exempt
def modify_board(request):
    request_body = QueryDict(request.body)
    board_id = request_body.get('board_id')
    if request.method == 'DELETE':
        board = Board.objects.filter(board_id=board_id)
        board.delete()
    elif request.method == 'PUT':
        title = request_body.get('title',None)
        description = request_body.get('description',None)
        board = Board.objects.get(board_id=board_id)
        if title != None:
            board.title = title
        if description != None:
            board.description = description 
        board.save()
    return HttpResponse(status=200)

@csrf_exempt
def modify_task(request):
    request_body = QueryDict(request.body)
    task_id = request_body.get('task_id')
    if request.method == 'DELETE':
        Task.objects.filter(task_id=task_id).delete()
    elif request.method == 'PUT':
        completed = request_body.get('completed',None)
        description = request_body.get('description',None)
        task = Task.objects.get(task_id=task_id)
        if completed != None:
            task.completed = completed
        if description != None:
            task.description = description 
        task.save()
    return HttpResponse(status=200)
    