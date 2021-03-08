import { Component, OnInit } from '@angular/core';
import { Todo } from './../interfaces/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './app-todo-list.component.html',
  styleUrls: ['./app-todo-list.component.scss']
})
export class AppTodoList implements OnInit {

  toDoItems: Todo[] = [];
  
  constructor(
    public TodoService: TodoService,
    ) {}

  ngOnInit(): void {
    this.toDoItems = this.TodoService.getAllItems();
  }
}
