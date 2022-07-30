import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

import { Pokemon } from 'src/app/models/pokemon';

import listaPokemons from 'src/assets/data/pokemon.json'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemons:Array<Pokemon>;

  constructor(
    private router:Router,
    private dataService: DataService
  ) {
    this.pokemons = [];

    for (let i=0; i<listaPokemons.length; i++) {
      let data = listaPokemons[i];
      this.pokemons[i] = new Pokemon(data.id, data.name, data.type_1, data.type_2, data.abilities, data.moves, data.stats);
    }
   }

  ngOnInit(): void {
  }

  mostrarDetalles(pokemon:Pokemon) {
    this.dataService.setPokemon(pokemon);
    this.router.navigate([`/pokemons/${pokemon.id}`]);

    // let extras:NavigationExtras = {
    //   queryParams: { "pokemon": JSON.stringify(pokemon) }
    // }
    // this.router.navigate([`/pokemons/${pokemon.id}}`], extras);

  }
}
