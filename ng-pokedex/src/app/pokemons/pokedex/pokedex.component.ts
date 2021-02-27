import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  idPokemon: number = 0;
  @ViewChild(PokemonListComponent) pokemonList: PokemonListComponent | undefined;

  constructor() { }

  pokemonSelectorId(id: number) {
    this.idPokemon = id;
  }

  ngOnInit(): void {
  }

}
