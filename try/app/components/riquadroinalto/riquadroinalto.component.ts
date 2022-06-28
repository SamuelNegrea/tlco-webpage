import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-riquadroinalto',
  templateUrl: './riquadroinalto.component.html',
  styleUrls: ['./riquadroinalto.component.scss']
})
export class RiquadroinaltoComponent implements OnInit {
@Input() coloresfondo: any;
@Input() titolo: any;
@Input() paragrafo: any;
@Input() colore: any;
@Input() bottone: any;
  constructor() { }

  ngOnInit(): void {
  }

}
