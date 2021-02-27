import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../pokemon.service';

const POKEMON_NUMBER = 50;

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {


  pokemons: [] = [];
  private limit = POKEMON_NUMBER;
  @Output() idPokemon = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  onInput(e: any) {
    const value = e.target.value;

    this.pokemonService.searchPokemon(value, POKEMON_NUMBER).subscribe(rep => this.pokemons = rep.data);
  }

  onScroll(): void {
    this.limit += POKEMON_NUMBER;
    this.pokemonService.getPokemons(this.limit, 0).subscribe(rep => this.pokemons = rep.data);
  }

  onClick(id: number): void {
    this.idPokemon.emit(id);
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(POKEMON_NUMBER, 0).subscribe(rep => this.pokemons = rep.data);
  }


}
