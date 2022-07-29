import { Component, Input, OnInit } from '@angular/core';

// Importar archivos JSON
import coordenadasSprites from 'src/assets/data/sprites.json';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {
  @Input() id:number = 0;

  constructor() {}

  ngOnInit(): void {
  }

  public obtenerAncho():string {
    let ancho:string = coordenadasSprites[this.id.toString()][2];
    return ancho + "px";
  }

  public obtenerAltura():string {
    let alto:string = coordenadasSprites[this.id.toString()][3];
    return alto + "px";
  }

  public obtenerPosicion():string {
    let coord:Array<string> = coordenadasSprites[this.id.toString()];
    return "-" + coord[0] + "px -" + coord[1] + "px";
  }

}
