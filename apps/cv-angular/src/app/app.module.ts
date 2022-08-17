import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CvAngularFeatureMainModule } from '@cv-portfolio/cv-angular/feature-main';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CvAngularFeatureMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
