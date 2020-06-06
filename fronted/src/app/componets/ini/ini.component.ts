import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.scss']
})
export class IniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    visibilidad(selector, visible) {
    var elemento = document.querySelector(selector);
    console.log(elemento);
    if (elemento != null) {
      elemento.style.display = visible?'block':'none';
    }
  }


}


