import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    const userName = this.activatedRoute.snapshot.params.userName;
    //
    this.apiService.getPhotos(userName).subscribe(
      res => this.photos = res,
      error => console.error()
    );
  }

}
