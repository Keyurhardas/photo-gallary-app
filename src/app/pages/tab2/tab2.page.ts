import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Picture } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  FavoritePictures: any;
  isEmpty: boolean = false;
  constructor(
    private router: Router,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.FavoritePictures = await this.favoriteService.getAllFavorites();
    this.FavoritePictures.length == 0
      ? (this.isEmpty = true)
      : (this.isEmpty = false);
  }
  viewFullPicture(picture: Picture) {
    console.log(picture);
    this.router.navigateByUrl(`tabs/favorites/photo/${picture.id}`);
  }
}
