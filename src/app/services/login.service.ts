import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  autenticado: boolean = false;
  mostrarMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  loginUser(email: string, password: string) {
    this.autenticado = email === "admin@admin.com" && password === "admin";
    this.mostrarMenu.emit(this.autenticado);
    if (this.autenticado) this.router.navigate(['tarefa']);
  }

  logoutUser() {
    this.autenticado = false;
    this.mostrarMenu.emit(this.autenticado);
    this.router.navigate(['login']);
  }

  usuarioEstaLogado(): boolean {
    console.log(this.autenticado);
    return this.autenticado;
  }
}
