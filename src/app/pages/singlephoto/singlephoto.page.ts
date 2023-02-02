import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FavoriteService } from 'src/app/services/favorite.service';
@Component({
  selector: 'app-singlephoto',
  templateUrl: './singlephoto.page.html',
  styleUrls: ['./singlephoto.page.scss'],
})
export class SinglephotoPage implements OnInit {
  photoId: any;
  iconName: string = 'heart';
  Buttondisabled: boolean = false;
  picture: string = '';
  isLoading: boolean = true;
  constructor(
    private favoriteService: FavoriteService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.photoId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('received id', this.photoId);
    const picture = await this.favoriteService.getFavorite(this.photoId);
    this.picture = picture.download_url;
  }
  ngOnDestroy() {
    this.picture = '';
  }
  goBack() {
    this.location.back();
  }

  removeFavorite() {
    this.iconName = 'heart-outline';
    this.Buttondisabled = true;
    this.favoriteService.removeFavorite(this.photoId);
  }

  imgLoaded() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
