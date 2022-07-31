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
  public movimientoAMostrar:Movimiento;

  constructor(public dataService: DataService) {
    this.movimientos = this.dataService.getMovesList();
    this.detalles = "";
    this.visible = false;
    this.movimientoAMostrar = new Movimiento("","","","",0,0,"");
  }

  ngOnInit(): void {
  }

  public mostrarDetalles(movimiento: Movimiento): void {
    this.visible = true;
    this.movimientoAMostrar = movimiento;
    window.scroll(0,0);
  }

}
