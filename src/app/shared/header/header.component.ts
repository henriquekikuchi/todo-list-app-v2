import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayBotoes: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.mostrarMenu.subscribe(mostrar => this.displayBotoes = mostrar);
  }

  logout() {
    this.loginService.logoutUser();
  }

}
