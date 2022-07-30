import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() public pokemon:Pokemon = new Pokemon(-1, "", "", "", [], [], {});
  @Output() public pokemonAVisualizar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  visualizarDetalles(event: Event) {
    this.pokemonAVisualizar.emit(this.pokemon);    
  }

}
