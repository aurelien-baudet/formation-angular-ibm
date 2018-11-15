import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class ProgressionCoursService {
    constructor(private storage: StorageService) {}

    dejaSuivi(qui, cours): boolean {
        throw new Error('Not implemented');
    }

    demarrer(qui, cours) {
        console.log('premiere etape')
        return this.storage.obtenirEtape(cours, 0);
    }

    etapeSuivante(qui, cours) {
        console.log('etape suivante')
        const etapeCourante = this.storage.obtenirEtapeCourante(cours);
        const etapeSuivante = this.storage.obtenirEtape(cours, etapeCourante.numero + 1);
        return etapeSuivante;
    }
}