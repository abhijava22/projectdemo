import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  model = {
    username : "",
    password : ""
  }

  ngOnInit() {
  }

  login(){
    console.log(this.model.username);
    console.log(this.model.password);
  }

}
