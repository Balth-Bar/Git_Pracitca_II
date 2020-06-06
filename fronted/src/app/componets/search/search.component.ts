import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl,FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  createFormGrope(){
    return new FormGroup({
      cc: new FormControl('',Validators.required)
    })
  }

  userForm:FormGroup;
  regristros: any = [];


  constructor(private userService:UserService) { 

    this.userForm = this.createFormGrope();
  }

  ngOnInit(): void {
  }



  callOne(){

    if(this.userForm.valid){
      console.log(this.userForm.value.cc);
      this.userService.Callone(this.userForm.value.cc).subscribe(
        res => {
          this.regristros = res;

          if(this.regristros == ''){
            alert('no se encontro usuario en el sistema')
          }
          

        }

      )
    }else{

      alert("Ingresa una cedula");


    }


    
  }







}
