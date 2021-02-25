import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTodoList } from './list/app-todo-list.component';

const routes: Routes = [
  { path: 'todo-list', component:  AppTodoList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
