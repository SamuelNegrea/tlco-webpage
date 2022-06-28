import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { 

  }

  getNews() {
    return this.http.get( 'https://devtlco.tlco.info/wp-json/wp/v2/posts?_embed');
  }
}

