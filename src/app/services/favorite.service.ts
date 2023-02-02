import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Picture } from './pictures.service';

export enum Key {
  FAVORITES = 'favorites',
}

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async addFavorite(favorite: Picture) {
    const favorites = await this.getAllFavorites();
    favorites.push(favorite);
    this.setFavorite(favorites);
  }

  async removeFavorite(id: string) {
    const favorites = await this.getAllFavorites();
    const index = favorites.findIndex((f: any) => f.id === id);
    favorites.splice(index, 1);
    this.setFavorite(favorites);
  }
  async getAllFavorites(): Promise<any[]> {
    const data = await this._storage?.get(Key.FAVORITES);
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  async getFavorite(id: number) {
    const favorites = await this.getAllFavorites();
    const index = favorites.findIndex((f: any) => f.id === id);
    return favorites[index];
  }

  setFavorite(favorite: Array<Picture>) {
    const value = JSON.stringify(favorite);
    this._storage?.set(Key.FAVORITES, value);
  }
}
