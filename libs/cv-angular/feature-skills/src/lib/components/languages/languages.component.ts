import { Component, Input } from '@angular/core';
import { LanguageModel } from '@cv-portfolio/data';

@Component({
  selector: 'cv-portfolio-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  @Input() languages: LanguageModel[] = [];
}
