import { Component, Input } from '@angular/core';
import { Job } from '@cv-portfolio/data';

@Component({
  selector: 'cv-portfolio-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  @Input() jobs: Job[] = [];
}
