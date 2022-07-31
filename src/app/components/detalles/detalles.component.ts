import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

import { Pokemon } from 'src/app/models/pokemon';
import { Stats } from 'src/app/models/stats';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public pokemon:Pokemon;
  public total:number;
  public constante:number;

  constructor(
    private route:ActivatedRoute,
    private dataService: DataService
  ) {
    this.pokemon = new Pokemon(-1, "", "", "", [], [], new Stats(0,0,0,0,0,0));
    this.total = 0;
    this.constante = 257;
  }

  ngOnInit(): void {
    this.pokemon = this.dataService.getSavedPokemon();
    this.total = this.pokemon.estadisticas.hp + this.pokemon.estadisticas.ataque + this.pokemon.estadisticas.defensa +
      this.pokemon.estadisticas.ataque_especial + this.pokemon.estadisticas.defensa_especial + this.pokemon.estadisticas.velocidad;
    window.scroll(0,0);
  }

  public obtenerURL(tipo:string):string {
    let tipoPrueba:string = "rock"; 
    return `https://raw.githubusercontent.com/vmartinez33/pokemon_images/main/type_${tipoPrueba}.png`;
  }
}
