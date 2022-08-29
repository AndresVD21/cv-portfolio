import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageModel, SkillModel } from '@cv-portfolio/data';
import { reorderLanguages } from '@cv-portfolio/utils';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLanguage,
  faStar,
  faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { LanguagesService } from '../../services/languages.service';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'cv-portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  private $destroy = new Subject<boolean>();
  skills: SkillModel[] = [];
  languages: LanguageModel[] = [];

  numberOfBars = 4;

  constructor(
    private skillsService: SkillsService,
    private langsService: LanguagesService,
    library: FaIconLibrary
  ) {
    library.addIcons(
      faAngular,
      faReact,
      faSass,
      faJs,
      faCss3,
      faHtml5,
      faGit,
      faWandSparkles,
      faLanguage,
      faStar
    );
  }

  ngOnInit(): void {
    this.getSkills();
    this.getLanguages();
  }

  getSkills() {
    this.skillsService
      .getSkills()
      .pipe(takeUntil(this.$destroy))
      .subscribe(({ data }) => {
        this.skills = data ? [...data] : [];
      });
  }

  getLanguages() {
    this.langsService
      .getLanguages()
      .pipe(takeUntil(this.$destroy))
      .subscribe(({ data }) => {
        this.languages = reorderLanguages(data || []);
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }
}
