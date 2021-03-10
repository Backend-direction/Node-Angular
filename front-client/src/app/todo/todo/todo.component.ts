import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }

  openTodoDatail() {
    this.router.navigate(['todo', this.todo.id], { relativeTo: this.route });
    console.log(this.todo)
  }

}
