import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CaseManagementPage } from '../pages/case-management/case-management';
import { EvidenceManagementPage } from '../pages/evidence-management/evidence-management';
import { RequestsPage } from '../pages/requests/requests';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComposerProvider } from '../providers/composer/composer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CaseManagementPage,
    EvidenceManagementPage,
    RequestsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CaseManagementPage,
    EvidenceManagementPage,
    RequestsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ComposerProvider
  ]
})
export class AppModule {}