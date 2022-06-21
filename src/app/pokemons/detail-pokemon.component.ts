import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute, private router: Router, private _pokemonService: PokemonService) { }

    pokemon: Pokemon; //un pokemon
    private routeSub: Subscription;

    //rattata ==> pokemo
    //6 = rattata

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            let id = params['id'];
            this._pokemonService.getPokemon(id).subscribe(data => {
                this.pokemon =data;
            });

            //boucle FOR
            //cas ecole
            // for (let i = 0; i < this.pokemons.length; i++) {
            //     if (this.pokemons[i].id == id){
            //         this.pokemon = this.pokemons[i];
            //     }
                
            // }

            // VS typecript 
            //(maVariableTemporaire => operateur)
        });
    }

    goBack(){
        this.router.navigate(['/pokemon/all']);
    }

    goEdit(pokemon: Pokemon){
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    goDelete( pokemonId: number){
        this._pokemonService.deletePokemon(pokemonId).subscribe(() =>{
            this.goBack();
        })
    }
    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

   
}
