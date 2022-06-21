import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) { }

    pokemon: Pokemon = null;
    routeSub: Subscription;


    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            let id = params['id'];
            this._pokemonService.getPokemon(id).subscribe(data => {
              this.pokemon = data;
            });

            
        });
    }
    ngOnDestroy(): void{
      this.routeSub.unsubscribe()
    }

}

// Le fichier TypeScript de ce composant aura : 
// - Un selecteur
// - Un templateUrl
// - Une implémentation du OnInit
// - Un constructeur avec les objets ActivatedRoute et PokemonsService
// - Une variable => pokemon: Pokemon = null;
// - Le ngOnInit de ce composant devra récupérer l'id de la page. Avec cet ID, nous pouvons récupérer le pokemon courant et le stocker dans la variable : pokemon