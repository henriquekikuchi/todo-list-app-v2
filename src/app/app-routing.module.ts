import { AuthGuardService } from './guards/auth.guard.service';
import { CriarTarefaComponent } from './pages/criar-tarefa/criar-tarefa.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: TodoListComponent, canActivate:[AuthGuardService] },
  { path: 'tarefa', component: TodoListComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'criar-tarefa', component: CriarTarefaComponent, canActivate:[AuthGuardService] },
  { path: 'criar-tarefa/:id', component: CriarTarefaComponent, canActivate:[AuthGuardService], pathMatch: 'full' },
  { path: '**', redirectTo: 'tarefa' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
