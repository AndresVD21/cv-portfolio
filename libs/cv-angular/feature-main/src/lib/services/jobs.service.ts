import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  JobDTO,
  JobModel,
  ResponseDTO,
  ResponseModel,
} from '@cv-portfolio/data';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '@cv-portfolio/app-config';
import { getJobs } from '@cv-portfolio/data-access';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private httpClient: HttpClient
  ) {}

  getJobHistory(): Observable<ResponseModel<JobModel[]>> {
    // return this.httpClient.get<ResponseDTO<JobDTO[]>>(
    //   `${this.appConfig.apiUrl}/api/job-history`
    // );
    return getJobs(this.appConfig.functionsUrl);
  }
}
