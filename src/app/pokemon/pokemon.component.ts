import { Component } from '@angular/core';
import { PokemonResponse } from './pokemon.interface';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  template: `{{ selectedPokemon.species.name }} <div><img [src]="selectedPokemon.sprites.front_default"/></div>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class PokemonComponent  {

  constructor(public pokemonService: PokemonService) {}

  starterPokemon = [
    'Charmander',
    'Bulbasaur',
    'Squirtle'
  ]

  selectedPokemon;

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe(
      (res: PokemonResponse) => {
        this.selectedPokemon = res;
      })
  }
}
