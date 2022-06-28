import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cerchioaggregazione',
  templateUrl: './cerchioaggregazione.component.html',
  styleUrls: ['./cerchioaggregazione.component.scss']
})
export class CerchioaggregazioneComponent implements OnInit {
  news: any = [];
  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.api.getNews().subscribe((response: any) => {
      console.log(response);
     this.news = response.filter((a:any)=>a.categories.includes());
     console.log(this.news);
    });
  }


}
