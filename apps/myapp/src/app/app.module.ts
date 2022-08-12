import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyappFeatureMainModule } from '@cv-portfolio/myapp/feature-main';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyappFeatureMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
