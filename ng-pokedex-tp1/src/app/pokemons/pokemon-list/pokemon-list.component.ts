import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

const POKEMON_NUMBER = 50;

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: [] = [];
  private limit = POKEMON_NUMBER;

  constructor(private pokemonService: PokemonService) { }

  onScroll(): void {
    this.limit += POKEMON_NUMBER;
    this.pokemonService.getPokemons(this.limit, 0).subscribe(rep => this.pokemons = rep.data);
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(POKEMON_NUMBER, 0).subscribe(rep => this.pokemons = rep.data);
  }

}
