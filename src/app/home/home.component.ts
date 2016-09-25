import { Component, OnInit } from '@angular/core';
import {AuthService} from 'auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private login: string = '';
  private password: string = '';

  constructor() { }

 /* checkAccount(){
  this._authService.checkAccount(this.login, this.password);
    //console.log(this.login);

  }*/
  ngOnInit() {
  }

}
