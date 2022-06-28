import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestioneinfrastrutture',
  templateUrl: './gestioneinfrastrutture.component.html',
  styleUrls: ['./gestioneinfrastrutture.component.scss']
})
export class GestioneinfrastruttureComponent implements OnInit {
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
