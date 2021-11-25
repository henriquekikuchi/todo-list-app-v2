import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm?: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'senha': new FormControl(null),
    })
  }

  onSubmit(): void{
    const email = this.loginForm?.controls['email'].value;
    const senha = this.loginForm?.controls['senha'].value;

    this.loginService.loginUser(email, senha);
  }

}
