import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(public http: HttpClient) { }


  getPokedex() {

    return new Promise((resolve, reject) => {

      this.http.get("https://pokeapi.co/api/v2/pokedex/2").subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });

  }

}
