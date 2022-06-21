import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
  

export class AuthService {

  isLoggedIn: boolean = false; // utilisateur connecté ?
redirectUrl: string; //où rediriger l'utilisateur

// une méthode de connexion
  login(name: string, password: string) :Observable<boolean>{
    let isLoggedIn = (name === 'admin' && password ==='admin');

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = isLoggedIn)
    );
  }

  //une méthode de déconnexion
  logout( ){
    this.isLoggedIn = false;
  }
  
}
