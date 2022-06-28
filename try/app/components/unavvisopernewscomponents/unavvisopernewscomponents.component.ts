import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unavvisopernewscomponents',
  templateUrl: './unavvisopernewscomponents.component.html',
  styleUrls: ['./unavvisopernewscomponents.component.scss']
})
export class UnavvisopernewscomponentsComponent implements OnInit {

  @Input() immagine: any;
  @Input() titolo: any;
  @Input() descrizione: any;
  @Input() data: any; 
  @Input() categoria: any;
  @Input() coloreCategoria: any;
  @Input() bottone: any;

  constructor() { }

  ngOnInit(): void {
  }

}
