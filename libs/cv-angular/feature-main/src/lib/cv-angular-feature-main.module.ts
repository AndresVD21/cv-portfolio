import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@cv-portfolio/shared/ui';
import { SharedUtilFormatingModule } from '@cv-portfolio/shared/util-formating';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { JobsComponent } from './components/main/jobs/jobs.component';
import { JobComponent } from './components/main/jobs/job/job.component';
import { CvAngularFeatureMainRoutingModule } from './cv-angular-feature-main.routing';

@NgModule({
  imports: [
    CommonModule,
    CvAngularFeatureMainRoutingModule,
    SharedUiModule,
    SharedUtilFormatingModule,
  ],
  declarations: [MainComponent, HeaderComponent, JobsComponent, JobComponent],
  exports: [CvAngularFeatureMainRoutingModule, MainComponent, HeaderComponent],
})
export class CvAngularFeatureMainModule {}
