import { Component, Input, OnInit } from '@angular/core';

// Importar archivos JSON
import coordenadasTipos from 'src/assets/data/types.json';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  @Input() claveTipo:string = "";

  constructor() { }

  ngOnInit(): void {

  }

  public obtenerAncho():string {
    let ancho:string = coordenadasTipos[this.claveTipo][2];
    return ancho + "px";
  }

  public obtenerAltura():string {
    let alto:string = coordenadasTipos[this.claveTipo][3];
    return alto + "px";
  }

  public obtenerPosicion():string {
    let coord:Array<string> = coordenadasTipos[this.claveTipo];
    return "-" + coord[0] + "px -" + coord[1] + "px";
  }

}
