import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private currentUser = {login: '', password: ''};
  private authUser = {login: 'ng2', password: '123'};
  private checkPass: boolean = false;
  constructor() {
   // console.log(this.login);
  }

checkAccount(login, password){
  this.currentUser.login = login;
  this.currentUser.password = password;

  if(this.currentUser.login === this.authUser.login && this.currentUser.password === this.authUser.password){
    this.checkPass === true;
  }
}

}
