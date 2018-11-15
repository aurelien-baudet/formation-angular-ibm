import { CoursService } from './../../services/cours.service';
import { ListeCoursService } from './../../services/liste-cours.service';
import { Cours } from './../../model/cours';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  coursRecuperesDepuisServeur: Cours[] = [];
  coursPrecedentsRecuperesDepuisServeur: Cours[] = []
  coursCourant: Cours;

  constructor(private listeCoursService: ListeCoursService,
              private coursService: CoursService) {}

  ngOnInit() {
    this.rafraichir();
  }
  
  commencerCours(cours: Cours) {
    const choix = prompt("Souhaitez-vous acheter ce cours ?", "Oui");
    if(choix==="Oui") {
      const coursAJour = this.coursService.choisirCours('moi', cours);
      this.coursCourant = coursAJour;
      this.rafraichir();
    }
  }
  
  recommencerCours(cours: Cours) {
    const coursAJour = this.coursService.choisirCours('moi', cours);   
    this.coursCourant = coursAJour;
    this.rafraichir();
  }
  
  rafraichir() {
    this.listeCoursService.listerTousLesCours()
      .subscribe(cours => this.coursRecuperesDepuisServeur = cours);
    this.coursPrecedentsRecuperesDepuisServeur = this.listeCoursService.listerCoursSuivis();
  }

}
