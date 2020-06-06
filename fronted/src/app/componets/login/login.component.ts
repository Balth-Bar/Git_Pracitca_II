import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/crud/user';
import { Router } from '@angular/router';

import {FormControl,FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  createFormGrope(){
    return new FormGroup({

      nombre:       new FormControl('',Validators.required),
      contra:       new FormControl('',Validators.required),
      captcha:      new FormControl()
     
    })
  }

  login : any = [] ; 

  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    
  ) { 
    this.userForm = this.createFormGrope();
  }

  ngOnInit(): void {
  }

  
  click(){

    if(this.userForm.valid){

      this.userService.calluser(this.userForm.value.nombre,this.userForm.value.contra).subscribe(
        res =>{

          this.login = res;
          if(this.login == ''){
            alert('No esta registrado en el sistema')

          }
          else{

            const user: User = {
              username: this.login[0].nombre

            }

            this.userService.setUser(user);
            this.router.navigate(['/home']);
            

          }
        } 
        
      )

    
    }    
    else{
      alert('Llene todos los datos')
    }

  }

}
