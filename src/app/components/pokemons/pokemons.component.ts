import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { PageEvent } from '@angular/material/paginator'

import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemons:Array<Pokemon>;
  public inicio:number;
  public fin:number;

  constructor(
    private router:Router,
    private dataService: DataService
  ) {
    this.pokemons = this.dataService.getPokemonList();
    this.inicio = 0;
    this.fin = 30;
   }

  ngOnInit(): void {
  }

  mostrarDetalles(pokemon:Pokemon) {
    this.dataService.savePokemon(pokemon);
    this.router.navigate([`/pokemons/${pokemon.id}`]);
  }

  getPaginatorData (event:PageEvent) {
    this.inicio = event.pageIndex * event.pageSize;
    this.fin = this.inicio + event.pageSize;
  }
}
