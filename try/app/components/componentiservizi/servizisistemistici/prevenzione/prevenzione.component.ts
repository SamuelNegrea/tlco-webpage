import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prevenzione',
  templateUrl: './prevenzione.component.html',
  styleUrls: ['./prevenzione.component.scss']
})
export class PrevenzioneComponent implements OnInit {
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
