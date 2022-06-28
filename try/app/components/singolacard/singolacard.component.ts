import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singolacard',
  templateUrl: './singolacard.component.html',
  styleUrls: ['./singolacard.component.scss']
})
export class SingolacardComponent implements OnInit {
  
  @Input() immagine: any;
  @Input() numero: any;
  @Input() descrizione: any;

  constructor() { }

  ngOnInit(): void {
  }

}
