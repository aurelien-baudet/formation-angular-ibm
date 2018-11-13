import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCoursComponent } from './cours/components/liste-cours/liste-cours.component';
import { ResumeCoursComponent } from './cours/components/resume-cours/resume-cours.component';
import { HomePageComponent } from './cours/pages/home-page/home-page.component';
import { QcmComponent } from './cours/components/qcm/qcm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCoursComponent,
    ResumeCoursComponent,
    HomePageComponent,
    QcmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
