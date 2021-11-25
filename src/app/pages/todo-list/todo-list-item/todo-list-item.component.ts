import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input('tarefaObj') tarefa?: Tarefa;
  @Input('tarefaId') tarefaId?: number;
  @Output() avisoBotaoDeletar: EventEmitter<any> = new EventEmitter();
  @Output() avisoBotaoCheck: EventEmitter<any> = new EventEmitter();
  @Output() avisoBotaoUpdate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  avisoDeletar(event: Event){
    this.avisoBotaoDeletar.emit({ id: this.tarefaId });
  }

  avisoCheck(event: Event) {
    this.avisoBotaoCheck.emit({ id: this.tarefaId, tarefa: this.tarefa});
  }

  avisoUpdate(id: any) {
    this.avisoBotaoUpdate.emit(this.tarefaId);
  }

  cardColor(): string {
    return this.tarefa?.concluida ? "green" : "#424242"
  }
}
