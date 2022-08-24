import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  JobDTO,
  JobModel,
  ResponseDTO,
  ResponseModel,
} from '@cv-portfolio/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  getJobHistory(): Observable<ResponseModel<JobModel[]>> {
    return this.httpClient.get<ResponseDTO<JobDTO[]>>('/api/job-history');
  }
}
