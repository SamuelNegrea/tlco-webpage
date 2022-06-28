import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.scss']
})
export class IconeComponent implements OnInit {
  @Input() immagine: any;
  @Input() titolo: any;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
