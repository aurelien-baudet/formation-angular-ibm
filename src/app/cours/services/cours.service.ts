import { ProgressionCoursService } from "./progression-cours.service";

export class CoursService {
    private progressionService: ProgressionCoursService;

    constructor(progressionService: ProgressionCoursService) {
        this.progressionService = progressionService;
    }

    choisirCours() {
        
    }

    suivreCours(qui, cours, etape) {
        // this.progressionService.etapeCourante();
        this.progressionService.etapeSuivante(qui, cours)
    }
}