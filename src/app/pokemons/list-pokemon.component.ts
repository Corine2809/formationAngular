import { Component, OnInit } from '@angular/core';
import { Pokemon } from "./pokemon";
import { Router } from '@angular/router';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
    pokemons: Pokemon[];
    

    constructor(private router: Router, private _pokemonService: PokemonService) { }

    ngOnInit(){
        this._pokemonService.getPokemons().subscribe(data => {
            this.pokemons = data;
        });
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}