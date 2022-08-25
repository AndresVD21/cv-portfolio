import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillModel } from '@cv-portfolio/data';
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
import { faLanguage, faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'cv-portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  private $destroy = new Subject<boolean>();
  skills: SkillModel[] = [];

  numberOfBars = 4;

  constructor(private skillsService: SkillsService, library: FaIconLibrary) {
    library.addIcons(
      faAngular,
      faReact,
      faSass,
      faJs,
      faCss3,
      faHtml5,
      faGit,
      faWandSparkles,
      faLanguage
    );
  }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skillsService
      .getSkills()
      .pipe(takeUntil(this.$destroy))
      .subscribe(({ data }) => {
        this.skills = data ? [...data] : [];
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }
}
