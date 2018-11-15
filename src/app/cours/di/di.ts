// export class CoursService {
//     progressionService: ProgressionService;

//     constructor(progression: ProgressionService) {
//         this.progressionService = progression;
//     }

//     suivreCours(qui, cours) {
//         this.progressionService.etapeSuivante(qui, cours);
//     }
// }

// export abstract class ProgressionService {
//     abstract etapeSuivante(qui, cours);
// }
// export class ConsoleProgressionService extends ProgressionService {
//     etapeSuivante(qui, cours) {
//         console.log("etape suivante = ", 1);
//     }
// }
// export class AndroidLoggerProgressionService extends ProgressionService {
//     etapeSuivante(qui: any, cours: any) {
//         throw new Error("Method not implemented.");
//     }
// }

// // component foo

// class HomePageComponent {
//     coursService: CoursService;
//     constructor(coursService: CoursService) {
//         this.coursService = coursService;
//     }

//     coursSelectionne(cours, qui) {
//         this.coursService.suivreCours(qui, cours);
//     }
// }

// let progressionServiceInstance: ProgressionService;
// let coursServiceInstance: CoursService;
// let homepage: HomePageComponent;

// if(web) {
//     // ----- web

//     progressionServiceInstance = new ConsoleProgressionService();
// } else {
//     // ----- mobile
    
//     progressionServiceInstance = new AndroidLoggerProgressionService();
    
// }

// coursServiceInstance = new CoursService(progressionServiceInstance);
// homepage = new HomePageComponent(coursServiceInstance);

// // ----- test