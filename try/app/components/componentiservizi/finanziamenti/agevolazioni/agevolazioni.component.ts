import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agevolazioni',
  templateUrl: './agevolazioni.component.html',
  styleUrls: ['./agevolazioni.component.scss']
})
export class AgevolazioniComponent implements OnInit {
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
