import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) 
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
