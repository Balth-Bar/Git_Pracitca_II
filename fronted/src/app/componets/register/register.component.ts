import { Component, OnInit} from '@angular/core';
import{UserService}from '../../services/user.service';
import{Users} from '../../crud/users';


import {FormControl,FormBuilder, FormGroup, NgForm } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent implements OnInit {

  createFormGrope(){
    return new FormGroup({

      nombre:new FormControl(''),
      cc:new FormControl(''),
      genero:new FormControl(''),
      eps: new FormControl(''),
      edad: new FormControl(''),
      telefono:new FormControl(''),
      direccion: new FormControl(''),
      imagen: new FormControl(''),

    })
  }

  userForm: FormGroup;

  ngOnInit(){}

  constructor(private db:UserService) { 

    this.userForm = this.createFormGrope();

  }

  onSaveForm(){
    
    console.log(this.userForm.value);
    this.db.postUser(this.userForm.value).subscribe( res=>{
        console.log(res);
      }

      )
  }


  


  




}
