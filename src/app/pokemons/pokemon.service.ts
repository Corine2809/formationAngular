import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,of } from "rxjs";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {

    private pokemonsUrl = 'api/pokemons';

    constructor(private http: HttpClient) { }
    //HTTP
    //retourne tous les pokemons
    getPokemons():Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);

    }
    //retourne le pokemon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable <Pokemon> {
        //GET URL ==> api/pokemons/1
        var url = this.pokemonsUrl + '/' +id;
        return this.http.get<Pokemon>(url);
    }

    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
    updatePokemon(pokemon : Pokemon) : Observable<Pokemon> {
     const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
     }
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions);
    }
    deletePokemon(pokemonId : number) : Observable<Pokemon> {
        var url = `${this.pokemonsUrl}/${pokemonId}`;
 return this.http.delete<Pokemon>(url);
        } 
        searchPokemons(term: string) : Observable<Pokemon[]> {
            if(!term.trim()) 
                return of([]);
    
            return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`)
        } 
    }
