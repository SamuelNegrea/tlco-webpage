import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerchiofigurina',
  templateUrl: './cerchiofigurina.component.html',
  styleUrls: ['./cerchiofigurina.component.scss']
})
export class CerchiofigurinaComponent implements OnInit {
  @Input() immagine: any;
  @Input() numero: any;
  @Input() descrizione: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
