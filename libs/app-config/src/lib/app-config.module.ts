import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('Application config');

@NgModule({
  imports: [CommonModule],
})
export class AppConfigModule {}
