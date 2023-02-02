import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, ToastController } from '@ionic/angular';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Picture, PicturesService } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  Pictures: Picture[] = [];
  offset: number = 20;
  page: number = 1;
  constructor(
    public toast: ToastController,
    private favoriteService: FavoriteService,
    private pictureService: PicturesService
  ) {}

  ngOnInit() {
    this.pictureService
      .getAllPictures(this.page, this.offset)
      .subscribe((res: Picture[]) => {
        this.Pictures = res;
        console.log(res);
      });
  }

  onIonInfinite(ev: any) {
    this.offset = this.offset + 20;
    this.pictureService
      .getAllPictures(this.page, this.offset)
      .subscribe((res: Picture[]) => {
        // this.Pictures.push(...res);
        this.Pictures = res;
        if (this.Pictures.length == 100) {
          this.page++;
          this.offset = 20;
        }
        console.log(res);
      });
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
      console.log(this.Pictures);
    }, 500);
  }

  addPictureTofavorite(picture: Picture) {
    console.log(picture);
    this.favoriteService.addFavorite(picture);
    this.presentToast('bottom');
  }

  async presentToast(position: 'top' | 'bottom' | 'bottom') {
    const toast = await this.toast.create({
      message: 'Added to favorites',
      duration: 1000,
      position: position,
    });

    await toast.present();
  }
}
