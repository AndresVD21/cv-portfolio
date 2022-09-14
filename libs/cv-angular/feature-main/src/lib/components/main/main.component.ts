import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobModel } from '@cv-portfolio/data';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faAddressCard,
  faFire,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { finalize, Subject, takeUntil } from 'rxjs';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'cv-portfolio-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private $destroy = new Subject<boolean>();

  jobs: JobModel[] = [];
  isLoading = false;
  loadingMessage = '';

  constructor(private jobsService: JobsService, library: FaIconLibrary) {
    library.addIcons(faAddressCard, faFolderOpen, faFire, faAngular);
  }

  ngOnInit(): void {
    this.getJobsHistory();
  }

  getJobsHistory() {
    this.isLoading = true;
    this.loadingMessage = 'Loading jobs history...';
    this.jobsService
      .getJobHistory()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
        takeUntil(this.$destroy)
      )
      .subscribe(({ data }) => {
        this.jobs = data ? [...data] : [];
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }
}
