import { Observable } from 'rxjs';
import { TodoListService } from './../../services/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tarefas$?: Observable<Tarefa[]> = new Observable();

  constructor(private todoListService: TodoListService, private router: Router) { }

  ngOnInit(): void {
    this.tarefas$ = this.getTarefas();
  }

  getTarefas(): Observable<Tarefa[]>{
    return this.todoListService.getTarefas();
  }

  getTarefa(id: number): Tarefa | undefined {
    return this.todoListService.getTarefa(id);
  }

  deletarTarefa(obj: {id: number}) {
    const id = obj.id;
    this.todoListService.deletarTarefa(id);
    this.tarefas$ = this.getTarefas();
  }

  concluirTarefa(obj: any) {
    const id = obj.id;
    const tarefa = obj.tarefa;
    tarefa.concluida=true;
    this.todoListService.atualizarTarefa(id, tarefa);
  }

  updateTarefa(id: any) {
    this.router.navigate(['criar-tarefa', id]);
  }
}
