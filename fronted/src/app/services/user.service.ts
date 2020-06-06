import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import{throwError, BehaviorSubject} from 'rxjs' ;
import{catchError} from 'rxjs/operators';

import {Observable} from 'rxjs';


import{Users} from '../crud/users';
import { User } from '../crud/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userBehavior: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  readonly URL_API = 'http://localhost:3000/api/user/';

  


  constructor(private httpClient: HttpClient, private router: Router) {
      this.userBehavior = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.userBehavior.asObservable();
  }

  public get currentUserValue() {
      return this.userBehavior.value;
  } 

   public setUser(user: User) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.userBehavior.next(user);
   }

   public isLoggin(): boolean {
      return this.userBehavior.value != undefined;
   }

   public logout() {
      this.userBehavior.next(undefined);
      localStorage.clear();
      this.router.navigate(['/login']);
   }

   postUser(User){
      return this.httpClient.post(this.URL_API,User);
   }

  Callone(CC:number){
      return this.httpClient.get(`${this.URL_API}/${CC}`);
  }

  calluser(user:string,contra:string){
      return this.httpClient.get(`${this.URL_API}/bytr/${user}&&${contra}`)
  }
  
  addMensaje(mensaje){
      return this.httpClient.post('http://localhost:3000/api/user/mensaje',mensaje)
  }
  
 


}
