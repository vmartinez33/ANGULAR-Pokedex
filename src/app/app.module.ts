import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SpriteComponent } from './components/sprite/sprite.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { CartaComponent } from './components/carta/carta.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PieComponent } from './components/pie/pie.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SpriteComponent,
    PokemonsComponent,
    CartaComponent,
    MovimientosComponent,
    CabeceraComponent,
    InicioComponent,
    NavegacionComponent,
    PieComponent,
    DetallesComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
