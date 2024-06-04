import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './../services/favorite.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(public favoriteService: FavoriteService, private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  removeFromFavorites(pokemonId: string) {
    this.favoriteService.removeFavorite(pokemonId);
  }

  goBack() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    this.navCtrl.navigateBack(`/pokemon/${pokemonId}`);
  }

}
