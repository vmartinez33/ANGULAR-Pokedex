import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public pokemon:Pokemon;

  constructor(
    private route:ActivatedRoute,
    private dataService: DataService
  ) {
    this.pokemon = new Pokemon(-1, "", "", "", [], [], {});
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) =>{ 
    //   let data = listaPokemons[params["id"]-1];
    //   this.pokemon = new Pokemon(data.id, data.name, data.type_1, data.type_2, data.abilities, data.moves, data.stats);
    // });

    // this.route.queryParams.subscribe(params => {
    //   this.pokemon = JSON.parse(params["pokemon"])
    // });

    this.pokemon = this.dataService.getPokemon();  
  }

}
