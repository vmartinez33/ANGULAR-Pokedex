import { Injectable } from '@angular/core';

import { Pokemon } from './models/pokemon';
import { Movimiento } from './models/movimiento';

import listaPokemons from 'src/assets/data/pokemon.json'
import listaMovimientos from 'src/assets/data/moves.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pokemon:Pokemon = new Pokemon(-1, "", "", "", [], [], {});
  private listaPokemon:Array<Pokemon>;
  private listaMovimientos:Array<Movimiento>;

  constructor() {
    this.listaPokemon = [];
    for (let i=0; i<listaPokemons.length; i++) {
      let data = listaPokemons[i];
      this.listaPokemon[i] = new Pokemon(data.id, data.name, data.type_1, data.type_2, data.abilities, data.moves, data.stats);
    }

    this.listaMovimientos = [];
    for (let i=0; i<listaMovimientos.length; i++) {
      let data = listaMovimientos[i];
      this.listaMovimientos[i] = new Movimiento(data.name, data.type, data.category, data.power, data.accuracy, data.pp, data.description);
    }
   }

  public savePokemon (pokemonData:Pokemon): void {
    this.pokemon = pokemonData;
  }

  public getSavedPokemon (): Pokemon {
    return this.pokemon;
  }

  public getPokemonList (): Array<Pokemon> {
    return this.listaPokemon;
  }

  public getMovesList(): Array<Movimiento> {
    return this.listaMovimientos;
  }

}
