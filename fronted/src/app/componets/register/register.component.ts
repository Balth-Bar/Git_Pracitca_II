import { Component, OnInit} from '@angular/core';
import{UserService}from '../../services/user.service';
import{Users} from '../../crud/users';


import {FormControl,FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent implements OnInit {

  createFormGrope(){
    return new FormGroup({

      nombre:   new FormControl('',Validators.required),
      cc:       new FormControl('',Validators.required),
      genero:   new FormControl('',Validators.required),
      eps:      new FormControl('',Validators.required),
      edad:     new FormControl('',Validators.required),
      telefono: new FormControl('',Validators.required),
      direccion:new FormControl('',Validators.required),
      imagen:   new FormControl('',Validators.required),

    })
  }

  some : any = [];

  userForm: FormGroup;

  ngOnInit(){}



  constructor(private db:UserService) { 

    this.userForm = this.createFormGrope();

  }

  onSaveForm(){

    if(this.userForm.valid){

      this.db.Callone(this.userForm.value.cc).subscribe(
        res => {        
          if(res == ""){
            this.userForm.value.imagen = this.userForm.value.imagen.replace("C:\\fakepath\\", "")     
            this.db.postUser(this.userForm.value).subscribe( res=>{
              console.log(res);
            }
            )
            alert("Se agrego Usuario al sistema");
             this.userForm.reset();

          }else{
            alert("usuario ya existente en el sistema");
          }

        }
      )
    
    }else{
      alert("Debes completar TODOS los campos");
      console.log('invalido');
    }
  
  }

  



  get nombre(){return this.userForm.get('nombre');}
  get cc(){return this.userForm.get('cc');}
  get genero(){return this.userForm.get('genero');}
  get eps(){return this.userForm.get('eps');}
  get telefono(){return this.userForm.get('telefono');}
  get direccion(){return this.userForm.get('direccion');}
  get edad(){return this.userForm.get('edad');}


  


  




}
