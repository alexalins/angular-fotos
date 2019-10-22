import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-gray',
  templateUrl: './card-gray.component.html',
  styleUrls: ['./card-gray.component.css']
})
export class CardGrayComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
