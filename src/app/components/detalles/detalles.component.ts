import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Pokemon } from 'src/app/models/pokemon';

import listaPokemons from 'src/assets/data/pokemon.json';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public pokemon:Pokemon;

  constructor(
    private route:ActivatedRoute
  ) {
    this.pokemon = new Pokemon(-1, "", "", "", [], [], {});
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{ 
      let data = listaPokemons[params["id"]-1];
      this.pokemon = new Pokemon(data.id, data.name, data.type_1, data.type_2, data.abilities, data.moves, data.stats);
    });
  }

}
