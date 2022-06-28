import { Component, OnInit } from '@angular/core';
// Now, within any of the app files (ES2015 style)
import * as $ from 'jquery';
//
$('#elemId').width();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {

    console.log("pagina caricata");



  }

  ngAfterViewInit() {

    const burger = document.querySelector('#burger');
    const menumobile = document.querySelector('#menumobile');
    console.log(burger, menumobile);

    if (burger && menumobile) {
      burger.addEventListener('click', () => {
        if (menumobile.classList.contains('nascosto')) {
          menumobile.classList.remove('nascosto');
        } else {
          menumobile.classList.add('nascosto');
        }
      });
    }

  }


  public toggleMenu (){
    

    $("#menumobile").addClass("nascosto");


  }



}
