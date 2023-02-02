import { TestBed } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],
    });

    service = TestBed.inject(FavoriteService);
    // storage = TestBed.inject(Storage);
  });

  // afterEach(async () => {
  //   await storage.clear();
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty array', async () => {
    const value = await service.getAllFavorites();
    expect(value).toEqual([]);
  });

  it('should add a favorite picture', async () => {
    const obj = {
      author: 'Alejandro Escamilla',
      download_url: 'https://picsum.photos/id/0/5000/3333',
      height: 3333,
      id: '0',
      url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
      width: 5000,
    };
    const value = await service.addFavorite(obj);
    expect(value);
  });
});
