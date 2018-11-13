import { Cours } from './../../model/cours';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  coursRecuperesDepuisServeur: Cours[] = [{
    titre: 'Angular 7',
    vignette: '',
    nombreVues: 105,
    resume: 'Les nouveautés d\'Angular'
  }, {
    titre: 'Spring Boot',
    vignette: '',
    nombreVues: 500,
    resume: 'La magie de Spring Boot'
  }, {
    titre: 'Python',
    vignette: '',
    nombreVues: 5,
    resume: 'Le langage du futur'
  }, {
    titre: 'NodeJS',
    vignette: '',
    nombreVues: 60,
    resume: 'Réinventer la roue est notre crédo'
  }];

  coursPrecedentsRecuperesDepuisServeur: Cours[] = [{
    titre: 'Angular 7',
    vignette: '',
    nombreVues: 105,
    resume: 'Les nouveautés d\'Angular'
  }, {
    titre: 'NodeJS',
    vignette: '',
    nombreVues: 60,
    resume: 'Réinventer la roue est notre crédo'
  }]

  coursCourant: Cours;

  commencerCours(cours: Cours) {
    const choix = prompt("Souhaitez-vous acheter ce cours ?", "Oui");
    if(choix==="Oui") {
      this.coursCourant = cours;
    }
  }

  recommencerCours(cours: Cours) {
    this.coursCourant = cours;
  }

}
