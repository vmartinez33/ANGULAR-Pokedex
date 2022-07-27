import { Component, OnInit } from '@angular/core';

// Importar archivos JSON
import coordenadasSprites from 'src/assets/data/sprites.json';
import listaPokemons from 'src/assets/data/pokemon.json'

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {
  public coordenadas:any;
  public pokemons:any;
  public url:string;

  constructor() {
    this.coordenadas = coordenadasSprites;
    this.pokemons = listaPokemons;
    this.url = "src/assets/img/sprites.png";
   }

  ngOnInit(): void {
  }

  /*
  public obtenerEstilo(id:string): Object {
    interface Style {
      width?:string;
      height?:string;
      background?:string
    }

    let coord:Array<string> = this.coordenadas[id];

    //let estilo:Style = <any>{};
    let estilo:Style = {};

    estilo.width = coord[2];
    estilo.height = coord[3];
    estilo.background = "url(src/assets/img/sprites.png) -" + coord[0] + "px -" + coord[1] + "px";

    return estilo;
  }
  */

  public obtenerAncho(id:string):string {
    let ancho:string = this.coordenadas[id][2];
    return ancho + "px";
  }

  public obtenerAltura(id:string):string {
    let alto:string = this.coordenadas[id][3];
    return alto + "px";
  }

  public obtenerPosicion(id:string):string {
    let coord:Array<string> = this.coordenadas[id];
    return "-" + coord[0] + "px -" + coord[1] + "px";
  }

}
