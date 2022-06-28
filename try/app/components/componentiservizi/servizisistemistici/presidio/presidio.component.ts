import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presidio',
  templateUrl: './presidio.component.html',
  styleUrls: ['./presidio.component.scss']
})
export class PresidioComponent implements OnInit {
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
