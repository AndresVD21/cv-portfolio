import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobDTO, JobModel } from '@cv-portfolio/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  getJobHistory(): Observable<JobModel[]> {
    return this.httpClient.get<JobDTO[]>('/api/job-history');
  }
}
