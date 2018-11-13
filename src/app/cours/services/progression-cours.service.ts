export interface ProgressionCoursService {
    etapeSuivante(qui, cours);
}

export class LogProgressionCoursService implements ProgressionCoursService {
    etapeSuivante(qui, cours) {
        console.log('etape suivante')
    }
}