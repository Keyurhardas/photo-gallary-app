import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { SinglephotoPage } from './singlephoto.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('SinglephotoPage', () => {
  let component: SinglephotoPage;
  let fixture: ComponentFixture<SinglephotoPage>;
  let storage: Storage;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglephotoPage ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot({
        name: '__mydb',
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
      }),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglephotoPage);
    component = fixture.componentInstance;
    storage = TestBed.inject(Storage);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
