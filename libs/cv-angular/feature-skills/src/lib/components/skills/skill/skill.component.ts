import { Component, Input } from '@angular/core';
import { SkillModel } from '@cv-portfolio/data';

@Component({
  selector: 'cv-portfolio-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skill: SkillModel = {
    skillName: '',
    skillLevel: 0,
    skillId: '',
  };

  @Input() numberOfBars = 0;
}
