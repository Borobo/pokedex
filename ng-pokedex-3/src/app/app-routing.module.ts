import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { AuthComponent } from './user/auth/auth.component';

const routes: Routes = [
  { path: 'details/:id', component: PokemonDetailComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: '', component: PokedexComponent } //normalement ça devrait être AuthComponent, mais je n'ai pas réussi cette étape.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
