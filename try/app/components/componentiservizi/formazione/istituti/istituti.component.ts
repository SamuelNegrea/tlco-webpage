import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-istituti',
  templateUrl: './istituti.component.html',
  styleUrls: ['./istituti.component.scss']
})
export class IstitutiComponent implements OnInit {
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
