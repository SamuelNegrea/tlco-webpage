import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network2',
  templateUrl: './network2.component.html',
  styleUrls: ['./network2.component.scss']
})
export class Network2Component implements OnInit {
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
