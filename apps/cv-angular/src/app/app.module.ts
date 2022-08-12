import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CvAngularFeatureMainModule } from '@cv-portfolio/cv-angular/feature-main';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CvAngularFeatureMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
