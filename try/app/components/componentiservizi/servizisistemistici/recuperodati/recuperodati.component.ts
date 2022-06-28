import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperodati',
  templateUrl: './recuperodati.component.html',
  styleUrls: ['./recuperodati.component.scss']
})
export class RecuperodatiComponent implements OnInit {
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
