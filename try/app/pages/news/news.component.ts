import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any = [];
  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getNews();
  }


  getNews() {
    this.api.getNews().subscribe((response: any) => {
      console.log(response);
     this.news = response;
    });
  }

}
