import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {
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
