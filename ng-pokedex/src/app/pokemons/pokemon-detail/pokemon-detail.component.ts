import { Location } from '@angular/common';
import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon = {

  };

  @Input() id: number = 0;

  constructor(private route: ActivatedRoute, private location: Location, private pokemonService: PokemonService) { }

  ngOnInit(): void {

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
    if (this.id != 0) {
      this.pokemonService.getPokemon(this.id).subscribe(rep => this.pokemon = rep);
    } else {
      this.pokemon = { id: 0 }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPokemon();
  }

}
