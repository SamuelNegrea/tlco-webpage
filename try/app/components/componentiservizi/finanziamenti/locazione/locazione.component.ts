import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locazione',
  templateUrl: './locazione.component.html',
  styleUrls: ['./locazione.component.scss']
})
export class LocazioneComponent implements OnInit {
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
