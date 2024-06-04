import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeapiService } from './../apis/pokeapi/pokeapi.service';
import { FavoriteService } from './../services/favorite.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemonId: string = '';
  pokemon: any = { types: [], stats: [] };
  isFavorite: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeapiService: PokeapiService,
    private navCtrl: NavController,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    this.isFavorite = this.favoriteService.isFavorite(this.pokemonId);
    this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
      this.pokemon = pokemon;
    });
  }

  capturar() {
    this.navCtrl.navigateForward('pokebola', { queryParams: { pokemonId: this.pokemonId } });
  }

  addToFavorites() {
    this.favoriteService.addFavorite(this.pokemonId);
    this.isFavorite = true;
    // Navegar para a página de favoritos após adicionar o Pokémon
    this.navCtrl.navigateForward('favorites');
  }
}
