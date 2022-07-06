import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private service: HttpClient) { }

  listPokemon() {
    return this.service.get("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10")
  }
}




