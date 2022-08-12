import { Component, Input, OnInit } from '@angular/core';
import { Job } from '@cv-portfolio/data';

@Component({
  selector: 'cv-portfolio-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent {
  @Input()
  job!: Job;
}
