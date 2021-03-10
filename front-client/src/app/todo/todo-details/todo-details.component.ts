import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../../interfaces/todo';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo | undefined;

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      this.todo = this.todoService.getItemById(id);
    })

  }

}
