import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supportoait',
  templateUrl: './supportoait.component.html',
  styleUrls: ['./supportoait.component.scss']
})
export class SupportoaitComponent implements OnInit {
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
