import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finanziamenti',
  templateUrl: './finanziamenti.component.html',
  styleUrls: ['./finanziamenti.component.scss']
})
export class FinanziamentiComponent implements OnInit {
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
