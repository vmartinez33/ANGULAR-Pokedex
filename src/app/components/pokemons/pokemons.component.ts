import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

import { Pokemon } from 'src/app/models/pokemon';

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
    this.pokemons = this.dataService.getPokemonList();
   }

  ngOnInit(): void {
  }

  mostrarDetalles(pokemon:Pokemon) {
    this.dataService.savePokemon(pokemon);
    this.router.navigate([`/pokemons/${pokemon.id}`]);

    // let extras:NavigationExtras = {
    //   queryParams: { "pokemon": JSON.stringify(pokemon) }
    // }
    // this.router.navigate([`/pokemons/${pokemon.id}}`], extras);

  }
}
