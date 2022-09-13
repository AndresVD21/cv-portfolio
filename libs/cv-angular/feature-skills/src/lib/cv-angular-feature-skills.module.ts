import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { CvAngularFeatureSkillsRoutingModule } from './cv-angular-feature-skills.routing';
import { SharedUiModule } from '@cv-portfolio/shared/ui';
import { SkillComponent } from './components/skills/skill/skill.component';
import { SkillLevelComponent } from './components/skills/skill/skill-level/skill-level.component';
import { LanguagesComponent } from './components/languages/languages.component';

@NgModule({
  imports: [CommonModule, CvAngularFeatureSkillsRoutingModule, SharedUiModule],
  declarations: [
    SkillsComponent,
    SkillComponent,
    SkillLevelComponent,
    LanguagesComponent,
  ],
  exports: [CvAngularFeatureSkillsRoutingModule],
})
export class CvAngularFeatureSkillsModule {}
