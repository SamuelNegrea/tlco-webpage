import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servizisistemistici',
  templateUrl: './servizisistemistici.component.html',
  styleUrls: ['./servizisistemistici.component.scss']
})
export class ServizisistemisticiComponent implements OnInit {
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


