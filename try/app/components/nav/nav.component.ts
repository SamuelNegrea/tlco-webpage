import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'] 
})
export class NavComponent implements OnInit {

  slides = [{
    immagine: "../../../assets/images/1.png",
    classe: "classe1",
    titolo: "Il tuo partner IT di fiducia",
    paragrafo: "Siamo una società di progettazione e assistenza informatica specializzata nella gestione dei sistemi IT, telecomunicazioni e sicurezza per le imprese.",
    paragrafo2: "La nostra forza sono i tecnici, i sistemisti ed i programmatori che garantiscono un supporto qualificato da remoto e presso la tua sede e ottimizzano e mantegono efficiente e produttiva la tua azienda.",
    pulsante: "Scopri di più"
  },
  {
    immagine: "../../../assets/images/1.png",
    classe: "classe2",
    titolo: "I nostri servizi",
    paragrafo: "Supportiamo le aziende offrendo servizi sistemistici diversificati a seconda delle esigenze specifiche: dalla gestione completa dei sistemi informativi passando per lo sviluppo software fino al supporto agli IT manager, sia onsite che da remoto, TELE&CO garantisce continuità, sicurezzza e scalabilità ai propri clienti.",
    pulsante: "Scopri di più"
  },
  {
    immagine: "../../../assets/images/1.png",
    classe: "classe3",
    titolo: "Le nostre soluzioni",
    paragrafo: "La competenza certificata, la continua formazione e l'aggiornamento del nostro personale ci permettono di realizzare soluzioni tecnologiche sempre al passo con i tempi e avanguardia.",
    pulsante: "Scopri di più"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
