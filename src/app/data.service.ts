import { Injectable } from '@angular/core';

import { Pokemon } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public pokemon:Pokemon = new Pokemon(-1, "", "", "", [], [], {});

  constructor() { }

  public setPokemon (pokemonData:Pokemon): void {
    this.pokemon = pokemonData;
  }

  public getPokemon (): Pokemon {
    return this.pokemon;
  }
}
