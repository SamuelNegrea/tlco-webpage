import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svilupposoftware',
  templateUrl: './svilupposoftware.component.html',
  styleUrls: ['./svilupposoftware.component.scss']
})
export class SvilupposoftwareComponent implements OnInit {
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
