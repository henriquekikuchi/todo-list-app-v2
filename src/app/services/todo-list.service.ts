import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  tarefasList: Tarefa[] = [
    {
      titulo: "Desenvolver todo-list",
      descricao: "desenvolver todo list hoje",
      dataCriacao: new Date(),
      concluida: false,
    }
  ];

  constructor(private router: Router) { }

  getTarefas(): Observable<Tarefa[]> | any {
    if (this.tarefasList)
    return of(this.tarefasList).pipe(delay(2000))
  }

  getTarefa(indice: any) {
    const tarefaFilter = this.tarefasList.filter((_, index: number) => index == indice);

    if (tarefaFilter.length > 0) {
      return tarefaFilter[0];
    }
    return undefined
  }

  criarTarefa(titulo: string, descricao: string): void{
    const tarefa: Tarefa = {titulo: titulo, descricao: descricao, dataCriacao: new Date(), concluida: false}
    this.tarefasList?.push(tarefa);
    this.router.navigate(['']);
  }

  atualizarTarefa(indice: number, tarefaAtualizada: Tarefa){
    this.tarefasList[indice] = tarefaAtualizada;
    this.router.navigate(['']);
  }

  deletarTarefa(indice: number): void {
    this.tarefasList = this.tarefasList.filter((_, idx) => idx !== indice);
    this.router.navigate(['']);
  }

}
