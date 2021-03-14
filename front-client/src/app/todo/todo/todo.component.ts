import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../common/dialog/dialog.component'; 
import { TodoService } from '../../services/todo.service';

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
    private dialog: MatDialog,
    private todoService: TodoService,
    ) { }

  ngOnInit(): void {
  }

  openTodoDatail() {
    this.router.navigate(['todo', this.todo.id], { relativeTo: this.route });
    console.log(this.todo)
  }

  deleteItem() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { 
        title: 'Remove todo',
        text: 'Do you want to delete item ?',
        okBtn: 'Delete',
        cancelBtn: 'Cancel',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoService.remove(this.todo).subscribe();
      }
    });
  }

}
