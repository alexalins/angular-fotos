import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  photos: Photo[] = [];
  search: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ApiService
  ) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
   
  }

  load() {
    this.service
      .getPhotosPaginated(this.userName, ++this.currentPage)
      .subscribe( res => {
        this.search = '';
        this.photos = this.photos.concat(res);
        if(!res.length) this.hasMore = false;
      })
  }
}
