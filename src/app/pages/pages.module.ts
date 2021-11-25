import { DirectiveModule } from './../directive/directive.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    CriarTarefaComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    DirectiveModule,
  ],
  exports: [
    TodoListComponent,
    CriarTarefaComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
