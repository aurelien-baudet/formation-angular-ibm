import { Cours } from './../../model/cours';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resume-cours',
  templateUrl: './resume-cours.component.html',
  styleUrls: ['./resume-cours.component.scss']
})
export class ResumeCoursComponent {
  @Input()
  cours: Cours;

  @Output()
  coursSelectionne = new EventEmitter<Cours>();

  // clickSurCours() {
  //   this.coursSelectionne.emit(this.cours);
  // }
}
