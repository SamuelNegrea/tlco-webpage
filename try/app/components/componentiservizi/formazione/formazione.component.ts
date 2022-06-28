import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formazione',
  templateUrl: './formazione.component.html',
  styleUrls: ['./formazione.component.scss']
})
export class FormazioneComponent implements OnInit {
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
