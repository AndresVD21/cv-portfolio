import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MyappFeatureHomeModule } from '@cv-portfolio/myapp/feature-home';
import { MyappFeatureSettingsModule } from '@cv-portfolio/myapp/feature-settings';
import { MyappFeatureAboutModule } from '@cv-portfolio/myapp/feature-about';
import { MainComponent } from './components/main/main.component';

export const myappFeatureMainRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MyappFeatureHomeModule,
    MyappFeatureSettingsModule,
    MyappFeatureAboutModule,
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MyappFeatureMainModule {}
