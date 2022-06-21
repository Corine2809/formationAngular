import { Component } from '@angular/core';

@Component({
    selector: 'page-404',
    template: `<h1>Cette page n'existe pas</h1>
    <a routerLink="/pokemon/all">Retour à l'accueil</a>`
})
export class PageNotFoundComponent { }

// routerLink
// ==> /pokemons