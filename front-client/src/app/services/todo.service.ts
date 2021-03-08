import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, name: 'Learn Angular', isDone: false},
    { id: 2, name: 'Update cars list', isDone: false},
    { id: 3, name: 'Learn SOLID', isDone: false},
  ];

  getAllItems(): Todo[] {
    return this.todos;
  }

  add(todo: { name: string, isDone: boolean }) {
    const id = Math.max(...this.todos.map(item => item.id)) + 1;
    const newTodo = {
      id,
      ...todo,
    };

    this.todos.push(newTodo);
  }

  remove(todoId: number) {
   this.todos = this.todos.filter(({ id }) => id !== todoId);
  }

  update(item: Todo) {
    const itemIndex = this.todos.findIndex(todo => todo.id === item.id);
    this.todos[itemIndex] = item;
  }
}