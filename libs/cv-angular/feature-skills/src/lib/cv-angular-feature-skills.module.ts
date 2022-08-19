import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { CvAngularFeatureSkillsRoutingModule } from './cv-angular-feature-skills.routing';
import { SharedUiModule } from '@cv-portfolio/shared/ui';

@NgModule({
  imports: [CommonModule, CvAngularFeatureSkillsRoutingModule, SharedUiModule],
  declarations: [SkillsComponent],
  exports: [CvAngularFeatureSkillsRoutingModule],
})
export class CvAngularFeatureSkillsModule {}
