import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private _pokemonService: PokemonService, private router: Router) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._pokemonService.searchPokemons(term))
    );
  }

  goDetail(pokemonId: number) {
    let link = ['/pokemon', pokemonId];
    this.router.navigate(link);
  }
}