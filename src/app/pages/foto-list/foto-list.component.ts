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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

}
