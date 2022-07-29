import { Component, Input, OnInit } from '@angular/core';
import listaPokemons from 'src/assets/data/pokemon.json';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() public id:number = 0;
  public nombre:string = "";
  public tipo1:string = "";
  public tipo2:string|null = "";

  constructor() {}

  ngOnInit(): void {
    this.nombre = listaPokemons[this.id].name;
    this.tipo1 = listaPokemons[this.id].type_1;
    this.tipo2 = listaPokemons[this.id].type_2;
  }

}
