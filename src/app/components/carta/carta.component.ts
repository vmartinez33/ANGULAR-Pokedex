import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Stats } from 'src/app/models/stats';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() public pokemon:Pokemon = new Pokemon(-1, "", "", "", [], [], new Stats(0,0,0,0,0,0));
  @Output() public pokemonAVisualizar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  visualizarDetalles(event: Event) {
    this.pokemonAVisualizar.emit(this.pokemon);    
  }

}
