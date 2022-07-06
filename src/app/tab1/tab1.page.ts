import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pokemons!: any

  constructor(private service: ApiService) {
    
  }

  ngOnInit() {
    this.service.listPokemon().subscribe((res: any) => {
      this.pokemons = res.results
    })
  }
}
