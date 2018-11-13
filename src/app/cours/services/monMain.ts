import { CoursService } from './cours.service';
import { ProgressionCoursService, LogProgressionCoursService } from './progression-cours.service';

let progressionCoursService = new LogProgressionCoursService();
let coursService = new CoursService(progressionCoursService);