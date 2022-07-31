import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

import { Movimiento } from 'src/app/models/movimiento';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  public movimientos:Array<Movimiento>;
  public detalles:string;
  public visible:boolean;

  constructor(private dataService: DataService) {
    this.movimientos = this.dataService.getMovesList();
    this.detalles = "";
    this.visible = false;
  }

  ngOnInit(): void {
  }

  public mostrarDetalles(movimiento: Movimiento): void {
    this.visible = true;
    this.detalles = `El movimiento es: ${movimiento.nombre}`;
    window.scroll(0,0);
  }

}
