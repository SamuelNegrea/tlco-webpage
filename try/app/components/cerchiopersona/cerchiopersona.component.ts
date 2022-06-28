import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerchiopersona',
  templateUrl: './cerchiopersona.component.html',
  styleUrls: ['./cerchiopersona.component.scss']
})
export class CerchiopersonaComponent implements OnInit {
  
  @Input() immagine: any;
  @Input() nome: any;
  @Input() professione: any;

  constructor() { }

  ngOnInit(): void {
  }

}
