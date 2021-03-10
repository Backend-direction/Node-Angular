import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoRoutingModule } from './todo-routing.module';

import { AppTodoList } from './list/app-todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppTodoList,
    TodoComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    TodoRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class TodoModule { }
