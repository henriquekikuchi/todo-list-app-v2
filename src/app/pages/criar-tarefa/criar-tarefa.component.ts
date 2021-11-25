import { TodoListService } from './../../services/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent implements OnInit {
  criarTaskForm?: FormGroup;
  hasId?: boolean;
  tarefa?: Tarefa;
  id?: any;

  constructor(
    private todoListService: TodoListService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.hasId = this.route.snapshot.paramMap.has('id');

    if(this.hasId){
      this.id = this.route.snapshot.paramMap.get('id');
      this.tarefa = this.todoListService.getTarefa(this.id);
      if (this.tarefa) {
        this.criarTaskForm = new FormGroup({
          'titulo': new FormControl(this.tarefa.titulo),
          'descricao': new FormControl(this.tarefa.descricao),
        })
      }
    } else {
      this.criarTaskForm = new FormGroup({
        'titulo': new FormControl(null),
        'descricao': new FormControl(null)
      })

      }
    }

  onSubmit() {
    const titulo = this.criarTaskForm?.controls['titulo'].value;
    const descricao = this.criarTaskForm?.controls['descricao'].value;

    if(this.tarefa) {
        this.tarefa.titulo = titulo;
        this.tarefa.descricao = descricao;
        this.todoListService.atualizarTarefa(this.id, this.tarefa);
    } else {
      this.todoListService.criarTarefa(titulo, descricao);
    }

  }

}
