import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTodoList } from '../todo/list/app-todo-list.component';
import { DashboardComponent } from './dashboard.component';
import { TodoRoutingModule } from '../todo/todo-routing.module';
import ActivateGuard from '../services/guards/activate-guard';

const routes: Routes = [
  { 
    path: 'dashboard',
    component:  DashboardComponent,
    canActivate: [ActivateGuard],
    children: [
      {
        path: 'todo-list',
        component: AppTodoList,
        loadChildren: () => TodoRoutingModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
