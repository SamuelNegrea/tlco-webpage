import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unavviso',
  templateUrl: './unavviso.component.html',
  styleUrls: ['./unavviso.component.scss']
})
export class UnavvisoComponent implements OnInit {
  
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
