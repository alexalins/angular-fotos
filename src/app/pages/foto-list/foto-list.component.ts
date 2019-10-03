import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

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
