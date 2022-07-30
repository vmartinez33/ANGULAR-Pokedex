import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { MovimientosComponent } from "./components/movimientos/movimientos.component";
import { DetallesComponent } from "./components/detalles/detalles.component";
// import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes= [
{path: '', component: InicioComponent},
{path: 'inicio', component: InicioComponent},
{path: 'pokemons', component: PokemonsComponent},
{path: 'pokemons/:id', component: DetallesComponent},
{path: 'movimientos', component: MovimientosComponent}
];

export const routing: ModuleWithProviders<Object> = RouterModule.forRoot(appRoutes);




