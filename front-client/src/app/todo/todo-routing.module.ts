import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AppTodoList } from './list/app-todo-list.component';

const routes: Routes = [
  { 
    path: 'todo/:id',
    component: TodoDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
