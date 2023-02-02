import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss'],
})
export class ListviewComponent implements OnInit {
  @Input() pictures: any;
  color: string = '#FFFFFFB3';
  isLoading: boolean = true;
  @Output() pictureEvent = new EventEmitter<Picture>();
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  addPicture(picture: Picture) {
    this.pictureEvent.emit(picture);
  }
}
