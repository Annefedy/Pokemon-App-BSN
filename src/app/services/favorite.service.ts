import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: string[] = [];

  constructor() {
    this.loadFavorites();
  }

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = JSON.parse(favorites);
    }
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(pokemonId: string) {
    return this.favorites.includes(pokemonId);
  }

  addFavorite(pokemonId: string) {
    if (!this.isFavorite(pokemonId)) {
      this.favorites.push(pokemonId);
      this.saveFavorites();
    }
  }

  removeFavorite(pokemonId: string) {
    this.favorites = this.favorites.filter(id => id !== pokemonId);
    this.saveFavorites();
  }
}
