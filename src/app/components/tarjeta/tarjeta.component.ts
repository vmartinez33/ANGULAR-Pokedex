import { Component, Input, OnInit } from '@angular/core';

import listaMovimientos from 'src/assets/data/moves.json'

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() public nombre:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
