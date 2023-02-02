import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Picture {
  id!: string;
  author!: string;
  width!: number;
  height!: number;
  url!: string;
  download_url!: string;
}

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private http: HttpClient) {}

  getAllPictures(page: number, offset: number): Observable<Picture[]> {
    return this.http.get<Picture[]>(
      `https://picsum.photos/v2/list?page=${page}&limit=${offset}`
    );
  }
}
