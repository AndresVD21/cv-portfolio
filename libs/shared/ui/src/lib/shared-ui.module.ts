import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './angular-components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './angular-components/nav/nav.component';
import { HeaderComponent } from './angular-components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './angular-components/footer/footer.component';
import { FillPipe } from './pipes/fill.pipe';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [
    ButtonComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FillPipe,
  ],
  exports: [
    FontAwesomeModule,
    ButtonComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FillPipe,
  ],
})
export class SharedUiModule {}
