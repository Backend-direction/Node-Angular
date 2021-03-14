import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class TodoService {
  todos: Todo[] = [
    { id: 1, name: 'Learn Angular', isDone: false},
    { id: 2, name: 'Update cars list', isDone: false},
    { id: 3, name: 'Learn SOLID', isDone: false},
  ];

  constructor(private http: HttpClient) {}

  getAllItems(): Todo[] {
    return this.todos;
  }

  getItemById(id:number): Todo | undefined {
    return this.todos.find(todo => todo.id === id)
  }

  add(name: string) {
    const id = Math.max(...this.todos.map(item => item.id)) + 1;
    const newTodo = {
      id,
      isDone: false,
      name,
    };

    this.todos.push(newTodo);

    return this.todos;
  }

  remove(todo: Todo): Observable<{}> {
    console.log(todo)
    return this.http.delete(`http://localhost:3000/api/todo/${todo.id}`);

  }

  update(item: Todo) {
    const itemIndex = this.todos.findIndex(todo => todo.id === item.id);
    this.todos[itemIndex] = item;
  }
}