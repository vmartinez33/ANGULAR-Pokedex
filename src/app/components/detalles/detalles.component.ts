import { Component, OnInit } from '@angular/core';
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
    public dataService: DataService
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

  public obtenerColor(stat:number):string {
    if (stat <= 40) {
      return "#fa5858"
    } else if (stat > 40 && stat <= 70) {
      return "#FAAC58"
    } else if (stat > 70 && stat <= 100) {
      return "#F7D358"
    } else if (stat > 100 && stat <= 130) {
      return "#82fa58"
    } else {
      return "#58faac"
    }
  }
  
}
