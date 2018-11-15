import { Component, OnInit, Input } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

interface Questions {
  couleurCheval?: string;
  nombreUniversel?: string;
  a?: string[]
}


@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.scss']
})
export class QcmComponent {
  @Input()
  questions: Questions = {
    couleurCheval: 'noir',
    nombreUniversel: '12',
    a: []
  };

  envoyerReponses(form: FormControl) {
    if(form.valid) {
      console.log(form.value, this.questions)
    } else {
      console.error("pas valide");
    }
  }
}
