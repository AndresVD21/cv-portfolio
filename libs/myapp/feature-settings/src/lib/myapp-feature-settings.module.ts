import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SettingsComponent } from './container/settings/settings.component';
import { SharedUiModule } from '@cv-portfolio/shared/ui';

export const myappFeatureSettingsRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, SharedUiModule],
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
})
export class MyappFeatureSettingsModule {}
