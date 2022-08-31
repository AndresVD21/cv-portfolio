import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@cv-portfolio/app-config';
import {
  ResponseDTO,
  ResponseModel,
  SkillModel,
  SkillDTO,
} from '@cv-portfolio/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private httpClient: HttpClient
  ) {}

  getSkills(): Observable<ResponseModel<SkillModel[]>> {
    return this.httpClient.get<ResponseDTO<SkillDTO[]>>(
      `${this.appConfig.apiUrl}/api/skills`
    );
  }
}
