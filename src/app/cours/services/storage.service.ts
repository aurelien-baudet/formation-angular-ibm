import { Etape } from './../model/etape';
import { Cours } from './../model/cours';
import { Observable } from 'rxjs';

export abstract class StorageService {
    
    abstract listerCours(): Observable<Cours[]>;
    abstract listerCoursSuivis(): Cours[];

    abstract sauveCours(cours: Cours): Cours;
    abstract sauveCoursSuivi(cours: Cours): Cours;

    abstract obtenirEtapeCourante(cours: Cours): Etape;
    abstract obtenirEtape(cours: Cours, numeroEtape: number): Etape;
}
