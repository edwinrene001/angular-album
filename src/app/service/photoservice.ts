import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';

  constructor(private http: HttpClient) { }

  getPhotos(albumId: number): Observable<any> {
    return this.http.get(this.apiUrl + albumId);
  }
}