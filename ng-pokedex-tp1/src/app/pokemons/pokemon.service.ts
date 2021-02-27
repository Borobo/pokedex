import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokedexApiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number) {
    return this.http.get<{ data: [] }>(this.pokedexApiUrl + '/pokemons?limit=' + limit + '&offset=' + offset, {
      'responseType': 'json'
    });
  }

  getPokemon(id: number) {
    return this.http.get(this.pokedexApiUrl + '/pokemons/' + id, {
      'responseType': 'json'
    })
  }
}
