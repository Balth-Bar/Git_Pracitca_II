import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailPattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  createFormGrope(){
    return new FormGroup({

      nombre:         new FormControl('',Validators.required),
      correo:         new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      telefono:       new FormControl('',Validators.required),
      mensaje:        new FormControl('',Validators.required),
      

    })
  }

  userForm: FormGroup;


  constructor(private db:UserService) {
    this.userForm = this.createFormGrope();
   }


  ngOnInit(): void {
  }


  resetForm(){
    this.userForm.reset();

  }


  onSaveForm(){

    if(this.userForm.valid){

      console.log(this.userForm)
      
      this.db.addMensaje(this.userForm.value).subscribe(res=>{
        console.log(res); 
        this.resetForm();
        alert("mensaje enviado");
        }
      );
    }
    
    else{
      alert("Debes completar TODOS los campos correctamente ");
      console.log('invalido');

    }
  }


}
