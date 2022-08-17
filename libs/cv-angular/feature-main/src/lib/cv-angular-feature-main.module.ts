import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedUiModule } from '@cv-portfolio/shared/ui';
import { SharedUtilFormatingModule } from '@cv-portfolio/shared/util-formating';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { JobsComponent } from './components/main/jobs/jobs.component';
import { JobComponent } from './components/main/jobs/job/job.component';
import { FooterComponent } from './components/footer/footer.component';

export const cvAngularFeatureMainRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedUiModule,
    SharedUtilFormatingModule,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    JobsComponent,
    JobComponent,
    FooterComponent,
  ],
  exports: [MainComponent, HeaderComponent],
})
export class CvAngularFeatureMainModule {}
