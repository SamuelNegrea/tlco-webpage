import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { NavdropdownComponent } from './components/navdropdown/navdropdown.component';
import { Navdropdown2Component } from './components/navdropdown2/navdropdown2.component';
import { MenuComponent } from './components/menu/menu.component';
import { EticaComponent } from './pages/etica/etica.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { SoluzioniComponent } from './pages/soluzioni/soluzioni.component';
import { NewsComponent } from './pages/news/news.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
// import { ServizisistemisticiComponent } from './componentiservizi/servizisistemistici/servizisistemistici.component';
// import { GestioneinfrastruttureComponent } from './componentiservizi/gestioneinfrastrutture/gestioneinfrastrutture.component';
// import { SupportoaitComponent } from './componentiservizi/supportoait/supportoait.component';
// import { SvilupposoftwareComponent } from './componentiservizi/svilupposoftware/svilupposoftware.component';
// import { FinanziamentiComponent } from './componentiservizi/finanziamenti/finanziamenti.component';
// import { FormazioneComponent } from './componentiservizi/formazione/formazione.component';
import { IconeComponent } from './components/icone/icone.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { TessereHomeComponent } from './components/tessere-home/tessere-home.component';
import { NewscomponentComponent } from './components/newscomponent/newscomponent.component';
import { Carousel1Component } from './components/carousel1/carousel1.component';
import { TessereHomeMobileComponent } from './components/tessere-home-mobile/tessere-home-mobile.component';
import { CardsMobileComponent } from './components/cards-mobile/cards-mobile.component';
import { CertificazioniMobileComponent } from './components/certificazioni-mobile/certificazioni-mobile.component';
import { CarouselMedioscreenComponent } from './components/carousel-medioscreen/carousel-medioscreen.component';
import { SingolacardComponent } from './components/singolacard/singolacard.component';
import { UnavvisoComponent } from './components/unavviso/unavviso.component';
import { ChipModule } from 'primeng/chip';
// import { PresidioComponent } from './componentiservizi/servizisistemistici/presidio/presidio.component';
// import { VulnerabilityComponent } from './componentiservizi/servizisistemistici/vulnerability/vulnerability.component';
// import { PrevenzioneComponent } from './componentiservizi/servizisistemistici/prevenzione/prevenzione.component';
// import { RecuperodatiComponent } from './componentiservizi/servizisistemistici/recuperodati/recuperodati.component';
// import { ServerComponent } from './componentiservizi/gestioneinfrastrutture/server/server.component';
import { BackupComponent } from './components/componentiservizi/gestioneinfrastrutture/backup/backup.component';
import { RiquadroinaltoComponent } from './components/riquadroinalto/riquadroinalto.component';
import { CerchiofigurinaComponent } from './components/cerchiofigurina/cerchiofigurina.component';
import { CerchiopersonaComponent } from './components/cerchiopersona/cerchiopersona.component';
import { CerchioeticaComponent } from './components/cerchioetica/cerchioetica.component';
import { CerchiogiovaniComponent } from './components/cerchiogiovani/cerchiogiovani.component';
import { CerchiosportComponent } from './components/cerchiosport/cerchiosport.component';
import { CerchiosocialeComponent } from './components/cerchiosociale/cerchiosociale.component';
import { CerchioterritorioComponent } from './components/cerchioterritorio/cerchioterritorio.component';
import { CerchiocollaboratoriComponent } from './components/cerchiocollaboratori/cerchiocollaboratori.component';
import { CerchioaggregazioneComponent } from './components/cerchioaggregazione/cerchioaggregazione.component';
import { PulsantiesearchbarComponent } from './components/pulsantiesearchbar/pulsantiesearchbar.component';
import { PrimoavvisoComponent } from './components/primoavviso/primoavviso.component';
import { UnavvisopernewscomponentsComponent } from './components/unavvisopernewscomponents/unavvisopernewscomponents.component';
// import { NetworkComponent } from './componentiservizi/gestioneinfrastrutture/network/network.component';
// import { VOIPComponent } from './componentiservizi/gestioneinfrastrutture/voip/voip.component';
// import { Server2Component } from './componentiservizi/supportoait/server2/server2.component';
// import { Backup2Component } from './componentiservizi/supportoait/backup2/backup2.component';
// import { Network2Component } from './componentiservizi/supportoait/network2/network2.component';
// import { DeployComponent } from './componentiservizi/supportoait/deploy/deploy.component';
// import { EcommerceComponent } from './componentiservizi/svilupposoftware/ecommerce/ecommerce.component';
// import { AppmobileComponent } from './componentiservizi/svilupposoftware/appmobile/appmobile.component';
// import { IntranetComponent } from './componentiservizi/svilupposoftware/intranet/intranet.component';
// import { SoftwareComponent } from './componentiservizi/svilupposoftware/software/software.component';
// import { DesignComponent } from './componentiservizi/svilupposoftware/design/design.component';
// import { SeoComponent } from './componentiservizi/svilupposoftware/seo/seo.component';
// import { GestionaliComponent } from './componentiservizi/svilupposoftware/gestionali/gestionali.component';
// import { AgevolazioniComponent } from './componentiservizi/finanziamenti/agevolazioni/agevolazioni.component';
// import { LocazioneComponent } from './componentiservizi/finanziamenti/locazione/locazione.component';
// import { IstitutiComponent } from './componentiservizi/formazione/istituti/istituti.component';
// import { ServereinfrastruttureComponent } from './componentisoluzioni/servereinfrastrutture/servereinfrastrutture.component';
// import { VirtualizzazioneComponent } from './componentisoluzioni/servereinfrastrutture/virtualizzazione/virtualizzazione.component';
// import { IperconvergenzaComponent } from './componentisoluzioni/servereinfrastrutture/iperconvergenza/iperconvergenza.component';
// import { ServerincloudComponent } from './componentisoluzioni/servereinfrastrutture/serverincloud/serverincloud.component';
// import { BackupedisasterrecoveryComponent } from './componentisoluzioni/backupedisasterrecovery/backupedisasterrecovery.component';
// import { Backup3Component } from './componentisoluzioni/backupedisasterrecovery/backup3/backup3.component';
// import { DisasterrecoveryebusinesscontinuityComponent } from './componentisoluzioni/backupedisasterrecovery/disasterrecoveryebusinesscontinuity/disasterrecoveryebusinesscontinuity.component';
// import { SicurezzaComponent } from './componentisoluzioni/sicurezza/sicurezza.component';
// import { AntivirusComponent } from './componentisoluzioni/sicurezza/antivirus/antivirus.component';
// import { AntispamComponent } from './componentisoluzioni/sicurezza/antispam/antispam.component';
// import { PasswordComponent } from './componentisoluzioni/sicurezza/password/password.component';
// import { UtmfirewallComponent } from './componentisoluzioni/sicurezza/utmfirewall/utmfirewall.component';
// import { VpnComponent } from './componentisoluzioni/sicurezza/vpn/vpn.component';
// import { PostazionidilavoroComponent } from './componentisoluzioni/postazionidilavoro/postazionidilavoro.component';
// import { PcComponent } from './componentisoluzioni/postazionidilavoro/pc/pc.component';
// import { StazioniappleewindowsComponent } from './componentisoluzioni/postazionidilavoro/stazioniappleewindows/stazioniappleewindows.component';
// import { MobileComponent } from './componentisoluzioni/postazionidilavoro/mobile/mobile.component';
// import { VideoconferenzaComponent } from './componentisoluzioni/postazionidilavoro/videoconferenza/videoconferenza.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    HomepageComponent,
    NavdropdownComponent,
    Navdropdown2Component,
    MenuComponent,
    EticaComponent,
    ChisiamoComponent,
    ServiziComponent,
    SoluzioniComponent,
    NewsComponent,
    ContattiComponent,
    // ServizisistemisticiComponent,
    // GestioneinfrastruttureComponent,
    // SupportoaitComponent,
    // SvilupposoftwareComponent,
    // FinanziamentiComponent,
    // FormazioneComponent,
    IconeComponent,
    CarouselComponent,
    TessereHomeComponent,
    NewscomponentComponent,
    Carousel1Component,
    TessereHomeMobileComponent,
    CardsMobileComponent,
    CertificazioniMobileComponent,
    CarouselMedioscreenComponent,
    SingolacardComponent,
    UnavvisoComponent,
    // PresidioComponent,
    // VulnerabilityComponent,
    // PrevenzioneComponent,
    // RecuperodatiComponent,
    // ServerComponent,
    BackupComponent,
    RiquadroinaltoComponent,
    CerchiofigurinaComponent,
    CerchiopersonaComponent,
    CerchioeticaComponent,
    CerchiogiovaniComponent,
    CerchiosportComponent,
    CerchiosocialeComponent,
    CerchioterritorioComponent,
    CerchiocollaboratoriComponent,
    CerchioaggregazioneComponent,
    PulsantiesearchbarComponent,
    PrimoavvisoComponent,
    UnavvisopernewscomponentsComponent,
    // NetworkComponent,
    // VOIPComponent,
    // Server2Component,
    // Backup2Component,
    // Network2Component,
    // DeployComponent,
    // EcommerceComponent,
    // AppmobileComponent,
    // IntranetComponent,
    // SoftwareComponent,
    // DesignComponent,
    // SeoComponent,
    // GestionaliComponent,
    // AgevolazioniComponent,
    // LocazioneComponent,
    // IstitutiComponent,
    // ServereinfrastruttureComponent,
    // VirtualizzazioneComponent,
    // IperconvergenzaComponent,
    // ServerincloudComponent,
    // BackupedisasterrecoveryComponent,
    // Backup3Component,
    // DisasterrecoveryebusinesscontinuityComponent,
    // SicurezzaComponent,
    // AntivirusComponent,
    // AntispamComponent,
    // PasswordComponent,
    // UtmfirewallComponent,
    // VpnComponent,
    // PostazionidilavoroComponent,
    // PcComponent,
    // StazioniappleewindowsComponent,
    // MobileComponent,
    // VideoconferenzaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    HttpClientModule,
    TabViewModule,
    AccordionModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
