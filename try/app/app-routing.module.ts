import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EticaComponent } from './pages/etica/etica.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { SoluzioniComponent } from './pages/soluzioni/soluzioni.component';
import { NewsComponent } from './pages/news/news.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
// import { ServizisistemisticiComponent } from './componentiservizi/servizisistemistici/servizisistemistici.component';
// import { GestioneinfrastruttureComponent } from './componentiservizi/gestioneinfrastrutture/gestioneinfrastrutture.component';
// import { SupportoaitComponent } from './componentiservizi/supportoait/supportoait.component';
// import { SvilupposoftwareComponent } from './componentiservizi/svilupposoftware/svilupposoftware.component';
// import { FinanziamentiComponent } from './componentiservizi/finanziamenti/finanziamenti.component';
// import { FormazioneComponent } from './componentiservizi/formazione/formazione.component';
// import { PresidioComponent } from './componentiservizi/servizisistemistici/presidio/presidio.component';
// import { VulnerabilityComponent } from './componentiservizi/servizisistemistici/vulnerability/vulnerability.component';
// import { PrevenzioneComponent } from './componentiservizi/servizisistemistici/prevenzione/prevenzione.component';
// import { RecuperodatiComponent } from './componentiservizi/servizisistemistici/recuperodati/recuperodati.component';
// import { ServerComponent } from './componentiservizi/gestioneinfrastrutture/server/server.component';
import { BackupComponent } from './components/componentiservizi/gestioneinfrastrutture/backup/backup.component';
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
// import { ServerincloudComponent } from './componentisoluzioni/servereinfrastrutture/serverincloud/serverincloud.component';
// import { IperconvergenzaComponent } from './componentisoluzioni/servereinfrastrutture/iperconvergenza/iperconvergenza.component';
// import { BackupedisasterrecoveryComponent } from './componentisoluzioni/backupedisasterrecovery/backupedisasterrecovery.component';
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


const routes: Routes = [
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'etica', component: EticaComponent },
  { path: 'chisiamo', component: ChisiamoComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'soluzioni', component: SoluzioniComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contatti', component: ContattiComponent },
  // { path: 'servizisistemistici', component: ServizisistemisticiComponent },
  // { path: 'gestioneinfrastrutture', component: GestioneinfrastruttureComponent },
  // { path: 'supportoait', component: SupportoaitComponent },
  // { path: 'svilupposoftware', component: SvilupposoftwareComponent },
  // { path: 'finanziamenti', component: FinanziamentiComponent },
  // { path: 'formazione', component: FormazioneComponent },
  // { path: 'presidio', component: PresidioComponent },
  // { path: 'vulnerability', component: VulnerabilityComponent},
  // { path: 'prevenzione', component: PrevenzioneComponent},
  // { path: 'recuperodati', component: RecuperodatiComponent},
  // { path: 'server', component: ServerComponent},
  { path: 'backup', component: BackupComponent},
  // { path: 'network', component: NetworkComponent},
  // { path: 'VOIP', component: VOIPComponent},
  // { path: 'server2', component: Server2Component},
  // { path: 'backup2', component: Backup2Component},
  // { path: 'network2', component: Network2Component},
  // { path: 'deploy', component: DeployComponent},
  // { path: 'ecommerce', component: EcommerceComponent},
  // { path: 'appmobile', component: AppmobileComponent},
  // { path: 'software', component: SoftwareComponent},
  // { path: 'intranet', component: IntranetComponent},
  // { path: 'design', component: DesignComponent},
  // { path: 'seo', component: SeoComponent},
  // { path: 'gestionali', component: GestionaliComponent},
  // { path: 'agevolazioni', component: AgevolazioniComponent},
  // { path: 'locazione', component: LocazioneComponent},
  // { path: 'formazione', component: FormazioneComponent},
  // { path: 'istituti', component: IstitutiComponent},
  // { path: 'servereinfrastrutture', component: ServereinfrastruttureComponent},
  // { path: 'virtualizzazione', component: VirtualizzazioneComponent},
  // { path: 'serverincloud', component: ServerincloudComponent},
  // { path: 'iperconvergenza', component: IperconvergenzaComponent},
  // { path: 'backupedisasterrecovery', component: BackupedisasterrecoveryComponent},
  // { path: 'disasterrecoveryebusinesscontinuity', component: DisasterrecoveryebusinesscontinuityComponent},
  // { path: 'sicurezza', component: SicurezzaComponent},
  // { path: 'antivirus', component: AntivirusComponent},
  // { path: 'antispam', component: AntispamComponent},
  // { path: 'password', component: PasswordComponent},
  // { path: 'utmfirewall', component: UtmfirewallComponent},
  // { path: 'vpn', component: VpnComponent},
  // { path: 'postazionidilavoro', component: PostazionidilavoroComponent},
  // { path: 'pc', component: PcComponent},
  // { path: 'stazioniappleewindows', component: StazioniappleewindowsComponent},
  // { path: 'mobile', component: MobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
