import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {


  canActivate(){
   return new Promise<boolean>(resolve =>{
     setTimeout(() => {
         resolve(false);
   },3000);

 });
}
}
