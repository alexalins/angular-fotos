import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from 'src/app/models/photo';

const base_url = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  getPhotos(userName: string) {
    return this.http.get<Photo []>(base_url + userName+'/photos');
  }

  getPhotosPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo []>(base_url + userName+'/photos', {params});
  }
}
