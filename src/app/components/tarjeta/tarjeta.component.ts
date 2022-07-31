import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movimiento } from 'src/app/models/movimiento';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() public movimiento:Movimiento = new Movimiento("", "", "" , "", -1, -1, "");
  @Output() public movimientoAMostrar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mostrar (event: Event) {
    this.movimientoAMostrar.emit(this.movimiento);
  }

}
