import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedUiModule } from '@cv-portfolio/shared/ui';
import { SharedUtilFormatingModule } from '@cv-portfolio/shared/util-formating';

export const myappFeatureHomeRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedUiModule,
    SharedUtilFormatingModule,
  ],
})
export class MyappFeatureHomeModule {}
