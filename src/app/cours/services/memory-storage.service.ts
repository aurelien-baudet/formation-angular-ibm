import { Injectable } from '@angular/core';
import { Etape } from './../model/etape';
import { Cours } from './../model/cours';
import { StorageService } from "./storage.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MemoryStorageService extends StorageService {
    private etapesCouranteParIdCours = new Map<string, number>();
    private coursSuivis: Cours[] = [];

    constructor(private list: Map<string, Cours>, 
                private etapes: Map<string, Etape[]>) {
        super();
    }

    listerCours(): Observable<Cours[]> {
        return of(Array.from(this.list.values()));
    }

    listerCoursSuivis(): Cours[] {
        return this.coursSuivis;
    }

    sauveCours(cours: Cours): Cours {
        // met à jour la liste des cours
        const coursLocal = Object.assign({}, cours);
        this.list.set(cours.id, coursLocal);
        // met à jours la liste des cours suivis
        const index = this.coursSuivis.findIndex(c => c.id===cours.id);
        this.coursSuivis[index] = coursLocal;
        return coursLocal;
    }

    sauveCoursSuivi(cours: Cours): Cours {
        const coursLocal = Object.assign({}, cours);
        this.coursSuivis.push(coursLocal);
        return coursLocal;
    }

    obtenirEtape(cours: Cours, numeroEtape: number): Etape {
        const index = this.etapes.get(cours.id).findIndex(e => e.numero===numeroEtape);
        return this.getEtapeFromIndex(cours, index);
    }

    obtenirEtapeCourante(cours: Cours): Etape {
        const index = this.etapesCouranteParIdCours.get(cours.id);
        return this.getEtapeFromIndex(cours, index);
    }

    private getEtapeFromIndex(cours: Cours, index: number) {
        return this.etapes.get(cours.id)[index];
    }
}