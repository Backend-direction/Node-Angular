import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './app-todo-list.component.html',
  styleUrls: ['./app-todo-list.component.scss']
})
export class AppTodoList implements OnInit {

  toDoItems: Todo[] = [];
  todoTitle: string;
  isFormVisible: boolean;
  
  constructor(public TodoService: TodoService) {}

  ngOnInit(): void {
    this.toDoItems = this.TodoService.getAllItems();
  }

  showAddForm() {
    this.isFormVisible = true;
  }

  addTodo(form: NgForm) {
    this.toDoItems = this.TodoService.add(form.value.name);
    form.reset();
    this.isFormVisible = false;
  }
}
