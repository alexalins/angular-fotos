import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-fotos';
  photos: Object [] = [];

  constructor(private apiService: ApiService) {
    this.getPhotos();
  }

  getPhotos() {
    this.apiService.getPhotos().subscribe(
      res => { this.photos = res; console.log(this.photos)},
      error => {console.error();}
    );
  }
}
