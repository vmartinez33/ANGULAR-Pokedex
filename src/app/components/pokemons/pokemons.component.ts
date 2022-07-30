import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public range:Array<number>;

  constructor(
    private router:Router
  ) {
    this.range = [1,2,3,4,5,6,7,8,9];
   }

  ngOnInit(): void {
  }

  mostrarDetalles(id:number) {
    this.router.navigate([`/pokemons/${id}`]);
  }
}
