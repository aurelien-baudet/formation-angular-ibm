import { ProgressionCoursService } from './progression-cours.service';
import { CoursService } from './cours.service';

class ProgressionCoursServiceMock implements ProgressionCoursService {
    appele: boolean;

    etapeSuivante(qui: any, cours: any) {
        this.appele = true
    }
}

let progression = new ProgressionCoursServiceMock()
let coursService = new CoursService(progression);

assert(progression.appele == true)