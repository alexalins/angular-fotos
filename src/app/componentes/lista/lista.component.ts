import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  @Input() photos: Photo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
