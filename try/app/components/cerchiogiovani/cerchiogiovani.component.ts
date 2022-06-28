import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cerchiogiovani',
  templateUrl: './cerchiogiovani.component.html',
  styleUrls: ['./cerchiogiovani.component.scss']
})
export class CerchiogiovaniComponent implements OnInit {
  news: any = [];
  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getNews();
  }


  getNews() {
    this.api.getNews().subscribe((response: any) => {
      console.log(response);
     this.news = response.filter((a:any)=>a.categories.includes(33));
     console.log(this.news);
    });
  }

}
