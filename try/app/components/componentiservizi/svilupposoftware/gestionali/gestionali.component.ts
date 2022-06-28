import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionali',
  templateUrl: './gestionali.component.html',
  styleUrls: ['./gestionali.component.scss']
})
export class GestionaliComponent implements OnInit {
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
