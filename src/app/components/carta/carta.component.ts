import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

import listaPokemons from 'src/assets/data/pokemon.json';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() public id:number = 0;
  @Output() public pokemonAVisualizar = new EventEmitter();
  public nombre:string = "";
  public tipo1:string = "";
  public tipo2:string|null = "";

  constructor() {}

  ngOnInit(): void {
    this.nombre = listaPokemons[this.id-1].name;
    this.tipo1 = listaPokemons[this.id-1].type_1;
    this.tipo2 = listaPokemons[this.id-1].type_2;
  }

  visualizarDetalles(event: Event) {
    this.pokemonAVisualizar.emit(this.id);    
  }

}
