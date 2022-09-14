import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './angular-components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './angular-components/nav/nav.component';
import { HeaderComponent } from './angular-components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './angular-components/footer/footer.component';
import { FillPipe } from './pipes/fill.pipe';
import { LoadingComponent } from './angular-components/loading/loading.component';
import { NoDataComponent } from './angular-components/no-data/no-data.component';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [
    ButtonComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FillPipe,
    LoadingComponent,
    NoDataComponent,
  ],
  exports: [
    FontAwesomeModule,
    ButtonComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FillPipe,
    LoadingComponent,
    NoDataComponent,
  ],
})
export class SharedUiModule {}
