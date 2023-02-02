import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglephotoPageRoutingModule } from './singlephoto-routing.module';

import { SinglephotoPage } from './singlephoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglephotoPageRoutingModule
  ],
  declarations: [SinglephotoPage]
})
export class SinglephotoPageModule {}
