import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backup2',
  templateUrl: './backup2.component.html',
  styleUrls: ['./backup2.component.scss']
})
export class Backup2Component implements OnInit {
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
