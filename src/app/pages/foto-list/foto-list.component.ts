import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { ActivatedRoute } from '@angular/router';
import { Subject, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  debounce: Subject<string> = new Subject<string>();
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
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.search = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.service
      .getPhotosPaginated(this.userName, ++this.currentPage)
      .subscribe( res => {
        this.photos = this.photos.concat(res);
        if(!res.length) this.hasMore = false;
      })
  }
}
