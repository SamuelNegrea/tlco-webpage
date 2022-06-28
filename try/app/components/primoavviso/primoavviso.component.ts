import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primoavviso',
  templateUrl: './primoavviso.component.html',
  styleUrls: ['./primoavviso.component.scss']
})
export class PrimoavvisoComponent implements OnInit {
  
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
