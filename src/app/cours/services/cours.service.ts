import { StorageService } from './storage.service';
import { Etape } from './../model/etape';
import { Cours } from './../model/cours';
import { ProgressionCoursService } from "./progression-cours.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CoursService {
    constructor(private progressionService: ProgressionCoursService, 
                private storage: StorageService) {
    }

    choisirCours(qui, cours: Cours): Cours {
        // règle 1: ajouter un cours à la liste des cours précédemment suivis
        this.storage.sauveCoursSuivi(cours);
        // règle 2: incrémenter le nombre de vues
        const newCours = Object.assign({}, cours);
        newCours.nombreVues++;
        return this.storage.sauveCours(newCours);
    }
    
    suivreCours(qui, cours, etape): Etape {
        if(etape==0) {
            return this.progressionService.demarrer(qui, cours);
        }
        return this.progressionService.etapeSuivante(qui, cours)
    }
}