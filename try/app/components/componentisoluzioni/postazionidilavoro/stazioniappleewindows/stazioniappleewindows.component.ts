import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stazioniappleewindows',
  templateUrl: './stazioniappleewindows.component.html',
  styleUrls: ['./stazioniappleewindows.component.scss']
})
export class StazioniappleewindowsComponent implements OnInit {
  options: any;
  selectedOption: any;
  constructor() {
    this.options = [
      {name: 'Server e infrastrutture'},
      {name: 'Backup e Disaster Recovery'},
      {name: 'Sicurezza'},
      {name: 'Postazioni di lavoro'},
      {name: 'Network'},
      {name: 'Tecnologie Microsoft'},
      {name: 'Mail e PEC'},
      {name: 'Hosting e domini'},
      {name: 'Sviluppo software'},
      {name: 'Internet e telefonia'},
      {name: 'Centralini VOIP e microsoft Phone System'},
      {name: 'Privacy e GDPR'}
  ];
   }

  ngOnInit(): void {
  }

}
