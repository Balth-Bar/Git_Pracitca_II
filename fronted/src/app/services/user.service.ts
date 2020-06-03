import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import{throwError} from 'rxjs' ;
import{catchError} from 'rxjs/operators';

import {Observable} from 'rxjs';


import{Users} from '../crud/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  readonly URL_API = 'http://localhost:3000/api/user';

  


  constructor(private httpClient: HttpClient) {
      
   }

   postUser(User){
     return this.httpClient.post(this.URL_API,User)
   }
   

  

  
 


}
