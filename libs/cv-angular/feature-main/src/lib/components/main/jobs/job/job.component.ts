import { Component, Input } from '@angular/core';
import { JobModel } from '@cv-portfolio/data';

@Component({
  selector: 'cv-portfolio-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent {
  @Input()
  job!: JobModel;
}
