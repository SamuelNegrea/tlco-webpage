import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-etica',
  templateUrl: './etica.component.html',
  styleUrls: ['./etica.component.scss']
})
export class EticaComponent implements OnInit {
  news: any = [];
  constructor( private api: ApiService,) {  }

  ngOnInit(): void {
    this.getNews();
  }

  
  getNews() {
    this.api.getNews().subscribe((response: any) => {
     this.news = response;
    });
  }

}
