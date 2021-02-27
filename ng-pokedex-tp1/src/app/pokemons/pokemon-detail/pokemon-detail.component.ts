import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  private pokemon = {

  };

  constructor(private route: ActivatedRoute, private location: Location, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  goBack() {
    this.location.back();
  }

  playSound(id: number) {
    let audio = new Audio();
    audio.src = '../../assets/audio/' + id + '.mp3';
    audio.load();
    audio.play();
  }

  getPokemon() {
    const id = +(this.route.snapshot.paramMap.get("id") || 0);

    this.pokemonService.getPokemon(id).subscribe(rep => this.pokemon = rep);
  }

}
