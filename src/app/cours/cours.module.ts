import { SwapiStorageService } from './services/swapi-storage.service';
import { FormsModule } from '@angular/forms';
import { MemoryStorageService } from './services/memory-storage.service';
import { Cours } from './model/cours';
import { Etape } from './model/etape';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProgressionCoursService } from './services/progression-cours.service';
import { ListeCoursService } from './services/liste-cours.service';
import { CoursService } from './services/cours.service';
import { QcmComponent } from './components/qcm/qcm.component';
import { ResumeCoursComponent } from './components/resume-cours/resume-cours.component';
import { ListeCoursComponent } from './components/liste-cours/liste-cours.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { StorageService } from './services/storage.service';



const tousLesCours = new Map<string, Cours>();
tousLesCours.set('1', {
  id: '1',
  titre: 'Angular 7',
  vignette: '',
  nombreVues: 105,
  resume: 'Les nouveautés d\'Angular'
});
tousLesCours.set('2', {
  id: '2',
  titre: 'Spring Boot',
  vignette: '',
  nombreVues: 500,
  resume: 'La magie de Spring Boot'
});
tousLesCours.set('3', {
  id: '3',
  titre: 'Python',
  vignette: '',
  nombreVues: 5,
  resume: 'Le langage du futur'
});
tousLesCours.set('4', {
  id: '4',
  titre: 'NodeJS',
  vignette: '',
  nombreVues: 60,
  resume: 'Réinventer la roue est notre crédo'
});

const etapesParIdCours = new Map<string, Etape[]>();
etapesParIdCours.set('1', [{
  id: '1',
  titre: 'Intro',
  numero: 1
}, {
  id: '1-1',
  titre: 'Composants',
  numero: 2
}]);



@NgModule({
  declarations: [
    ListeCoursComponent,
    ResumeCoursComponent,
    HomePageComponent,
    QcmComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursService,
    ListeCoursService,
    ProgressionCoursService,
    // cours stockés en mémoire pour le dev
    {
      provide: StorageService,
      useFactory: () => {
        return new MemoryStorageService(tousLesCours, etapesParIdCours);
      },
      deps: []
    },
    // cours branchés sur l'API de SWAPI
    // { provide: StorageService, useClass: SwapiStorageService }
  ]
})
export class CoursModule { }
