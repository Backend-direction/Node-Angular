import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTodoList } from '../todo/list/app-todo-list.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component:  DashboardComponent,
    children: [
      {
        path: 'todo-list',
        component: AppTodoList,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
