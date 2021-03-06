import { ProgressionCoursService } from './progression-cours.service';
import { CoursService } from './cours.service';
import { StorageService } from './storage.service';

describe('[CoursService]', () => {
  describe('ETQ étudiant', () => {
    let storageService;
    let progressionService;
    let coursService: CoursService;

    beforeEach(() => {
      // Création d'une classe virtuelle ayant les méthodes 'sauveCours' et 'sauveCoursSuivi'.
      // Les méthodes ne font rien car on ne souhaite pas tester pas leur comportement.
      // On souhaite tester le comportement de cours service.
      // On renvoie en réponse le cours passé en entrée car les méthodes doivent retourner un cours.
      storageService = {
        sauveCours: (cours) => cours,
        sauveCoursSuivi: (cours) => cours
      }
      // création d'une classe virtuelle (sans méthode car non utile au test)
      progressionService = {};
      // instantiation dans le contexte du test avec les instances virtuelles
      coursService = new CoursService(progressionService as ProgressionCoursService, storageService as StorageService);
    });
    
    describe('lorsque je choisi un nouveau cours', () => {
      beforeEach(() => {
        // GIVEN: préconditions à l'exécution du test
        // mock (on simule un comportement pour les appels aux dépendances)
        spyOn(storageService, 'sauveCours').and.callThrough();
        spyOn(storageService, 'sauveCoursSuivi').and.callThrough();
      });

      it('je retrouve mon cours dans les cours précédemment suivis', () => {
        // WHEN: action utilisateur
        coursService.choisirCours('moi', {
          id: '1',
          titre: 'Cours 1',
          nombreVues: 1,
          vignette: '',
          resume: ''
        });
        // THEN: attendus (et donc vérification des attendus)
        // On vérifie que le cours a été enregistré dans les cours suivis
        // On vérifie donc que la méthode 'sauveCoursSuivi' a bien été appelée (pour mettre à jour le cours en base de données)
        expect(storageService.sauveCoursSuivi).toHaveBeenCalled();
      });

      it('je vois que le nombre de vues a été mis à jour', () => {
        // WHEN: action utilisateur
        const coursChoisi = coursService.choisirCours('moi', {
          id: '1',
          titre: 'Cours 1',
          nombreVues: 1,
          vignette: '',
          resume: ''
        });
        // THEN: attendus (et donc vérification des attendus)
        // On vérifie que le nombre de vues a été mis à jour
        // On vérifie donc que la méthode 'sauveCours' a bien été appelée (pour mettre à jour le cours en base de données)
        expect(storageService.sauveCours).toHaveBeenCalled();
        // On vérifie qu'en réponse de service, le cours renvoyé a bien le bon nombre de vues
        expect(coursChoisi.nombreVues).toBe(2);
      });
    })

    
    describe('lorsque je choisi un cours précédemment suivi', () => {
      beforeEach(() => {
        // GIVEN: préconditions à l'exécution du test
        // mock (on simule un comportement pour les appels aux dépendances)
        spyOn(storageService, 'sauveCours').and.callThrough();
        spyOn(storageService, 'sauveCoursSuivi').and.callThrough();
      });

      it('je retrouve mon cours dans les cours précédemment suivis', () => {
        // WHEN: action utilisateur
        coursService.choisirCours('moi', {
          id: '1',
          titre: 'Cours 1',
          nombreVues: 1,
          vignette: '',
          resume: ''
        });
        // THEN: attendus (et donc vérification des attendus)
        // On vérifie que le cours a été enregistré dans les cours suivis
        // On vérifie donc que la méthode 'sauveCoursSuivi' a bien été appelée (pour mettre à jour le cours en base de données)
        expect(storageService.sauveCoursSuivi).toHaveBeenCalled();
      });

      it('je vois que le nombre de vues a été mis à jour', () => {
        // WHEN: action utilisateur
        const coursChoisi = coursService.choisirCours('moi', {
          id: '1',
          titre: 'Cours 1',
          nombreVues: 1,
          vignette: '',
          resume: ''
        });
        // THEN: attendus (et donc vérification des attendus)
        // On vérifie que le nombre de vues a été mis à jour
        // On vérifie donc que la méthode 'sauveCours' a bien été appelée (pour mettre à jour le cours en base de données)
        expect(storageService.sauveCours).toHaveBeenCalled();
        // On vérifie qu'en réponse de service, le cours renvoyé a bien le bon nombre de vues
        expect(coursChoisi.nombreVues).toBe(2);
      });
    })
  })
});
