import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public range:Array<number>;

  constructor() {
    this.range = [1,2,3,4,5,6,7,8,9];
   }

  ngOnInit(): void {
  }

}
