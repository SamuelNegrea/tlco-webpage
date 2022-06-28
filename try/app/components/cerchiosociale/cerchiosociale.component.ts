import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cerchiosociale',
  templateUrl: './cerchiosociale.component.html',
  styleUrls: ['./cerchiosociale.component.scss']
})
export class CerchiosocialeComponent implements OnInit {
  news: any = [];
  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getNews();
  }


  getNews() {
    this.api.getNews().subscribe((response: any) => {
      console.log(response);
     this.news = response.filter((a:any)=>a.categories.includes(36));
     console.log(this.news);
    });
  }

}
