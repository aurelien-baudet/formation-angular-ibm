import { Observable } from 'rxjs';
import { Cours } from './../model/cours';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class ListeCoursService {
    constructor(private storage: StorageService) {}
    
    listerTousLesCours(): Observable<Cours[]> {
        return this.storage.listerCours();
    }

    listerCoursSuivis(): any {
        const suivis = this.storage.listerCoursSuivis();
        // enlever les doublons
        const suivisSansDoublons = [];
        for(let cours of suivis) {
            if(!suivisSansDoublons.find(c => c.id===cours.id)) {
                suivisSansDoublons.push(cours);
            }
        }
        return suivisSansDoublons;
    }
}