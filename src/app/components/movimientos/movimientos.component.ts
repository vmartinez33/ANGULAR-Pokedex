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

  constructor(private dataService: DataService) {
    this.movimientos = dataService.getMovesList();
  }

  ngOnInit(): void {
  }

}
