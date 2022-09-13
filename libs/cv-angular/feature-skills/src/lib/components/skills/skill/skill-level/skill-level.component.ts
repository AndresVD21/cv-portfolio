import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-portfolio-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.scss'],
})
export class SkillLevelComponent {
  @Input() level = -1;
  @Input() base = 0;
  @Input() numberOfBars = 4;

  getWidth() {
    if (
      this.base - 100 / this.numberOfBars < this.level &&
      this.level <= this.base
    ) {
      const diff = this.level - (this.base - 100 / this.numberOfBars);
      return `${diff * this.numberOfBars}%`;
    } else if (this.base > this.level) {
      return 0;
    } else {
      return '100%';
    }
  }
}
