import { Injectable } from '@angular/core';
import { Etape } from './../model/etape';
import { Cours } from './../model/cours';
import { StorageService } from "./storage.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface SwapiResponse<T> {
    results: T[]
}
type Film = any;


@Injectable()
export class SwapiStorageService extends StorageService {

    constructor(private http: HttpClient) {
        super();
    }

    listerCours(): Observable<Cours[]> {
        return this.http.get<SwapiResponse<Film>>('https://swapi.co/api/films/')
            .pipe(
                map(response => this.convertFilmsToCours(response.results))
            )
    }

    private convertFilmsToCours(films: Film[]) {
        return films.map<Cours>(film => ({
            id: film.episode_id,
            titre: film.title,
            nombreVues: film.characters.length,
            vignette: '',
            resume: ''
        }))
    }
    
    listerCoursSuivis(): Cours[] {
        return [];
    }

    sauveCours(cours: Cours): Cours {
        return cours;
    }

    sauveCoursSuivi(cours: Cours): Cours {
        return cours;
    }

    obtenirEtape(cours: Cours, numeroEtape: number): Etape {
        throw new Error('Not implemented');
    }

    obtenirEtapeCourante(cours: Cours): Etape {
        throw new Error('Not implemented');
    }
}