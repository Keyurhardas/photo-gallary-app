import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListviewComponent } from '../listview/listview.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, MatGridListModule, MatRippleModule, IonicModule],
  declarations: [ListviewComponent],
  exports: [ListviewComponent],
})
export class ListViewModule {}
