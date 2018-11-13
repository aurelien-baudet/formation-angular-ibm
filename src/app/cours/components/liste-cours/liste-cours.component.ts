import { Cours } from './../../model/cours';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.scss']
})
export class ListeCoursComponent {
  @Input()
  listeCours: Cours[];

  @Output()
  selectionne = new EventEmitter<Cours>();
}
