import { Component, OnInit } from '@angular/core';

import { Movimiento } from 'src/app/models/movimiento';

import listaMovimientos from 'src/assets/data/moves.json'

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  public movimientos:Array<Movimiento>;

  constructor() {
    this.movimientos = [];

    for (let i=0; i<listaMovimientos.length; i++) {
      let data = listaMovimientos[i];
      this.movimientos[i] = new Movimiento(data.name, data.type, data.category, data.power, data.accuracy, data.pp, data.description);
    }

  }

  ngOnInit(): void {
  }

}
