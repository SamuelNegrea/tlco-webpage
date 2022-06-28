import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appmobile',
  templateUrl: './appmobile.component.html',
  styleUrls: ['./appmobile.component.scss']
})
export class AppmobileComponent implements OnInit {
  options: any;
  selectedOption: any;
  constructor() {
    this.options = [
      {name: 'Servizi sistemistici'},
      {name: 'Gestione infrastrutture'},
      {name: 'Supporto a IT'},
      {name: 'Sviluppo software'},
      {name: 'Finanziamenti'},
      {name: 'Formazione'}
  ];
   }

  ngOnInit(): void {
  }

}
