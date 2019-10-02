import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { error } from '@angular/compiler/src/util';
import { Photo } from './models/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'angular-fotos';
  photos: Photo [] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.apiService.getPhotos('flavio').subscribe(
      res => this.photos = res,
      error => console.error()
    );
  }
}
