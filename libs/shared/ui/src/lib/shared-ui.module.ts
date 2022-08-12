import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [ButtonComponent, NavComponent, HeaderComponent],
  exports: [FontAwesomeModule, ButtonComponent, NavComponent, HeaderComponent],
})
export class SharedUiModule {}
