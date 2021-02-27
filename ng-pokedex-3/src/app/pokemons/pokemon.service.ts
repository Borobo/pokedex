import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokedexApiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(private http: HttpClient) { }

  getPokemons(limit: any, offset: any) {
    let params = new HttpParams();

    params = params.set('responseType', 'json');

    if (offset) {
      params = params.set('offset', offset);
    }
    if (limit) {
      params = params.set('limit', limit);
    }

    return this.http.get<{ data: [] }>(this.pokedexApiUrl + '/pokemons', { params });
  }

  getPokemon(id: number) {
    return this.http.get(this.pokedexApiUrl + '/pokemons/' + id, {
      'responseType': 'json'
    })
  }

  searchPokemon(value: any, limit: any) {
    let params = new HttpParams();

    params = params.set('limit', limit);

    if (value) {
      params = params.set('search', value);
    }

    return this.http.get<{ data: [] }>(this.pokedexApiUrl + '/pokemons', { params });
  }
}
