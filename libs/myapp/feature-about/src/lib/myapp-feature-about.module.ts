import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedUtilFormatingModule } from '@cv-portfolio/shared/util-formating';

export const myappFeatureAboutRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, SharedUtilFormatingModule],
})
export class MyappFeatureAboutModule {}
