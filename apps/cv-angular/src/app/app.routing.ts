import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('@cv-portfolio/cv-angular/feature-skills').then(
        (m) => m.CvAngularFeatureSkillsModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@cv-portfolio/cv-angular/feature-main').then(
        (m) => m.CvAngularFeatureMainModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
