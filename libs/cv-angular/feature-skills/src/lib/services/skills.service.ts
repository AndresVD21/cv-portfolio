import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@cv-portfolio/app-config';
import {
  ResponseDTO,
  ResponseModel,
  SkillModel,
  SkillDTO,
} from '@cv-portfolio/data';
import { getSkills } from '@cv-portfolio/data-access';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private httpClient: HttpClient
  ) {}

  getSkillsList(): Observable<ResponseModel<SkillModel[]>> {
    // return this.httpClient.get<ResponseDTO<SkillDTO[]>>(
    //   `${this.appConfig.apiUrl}/api/skills`
    // );
    return getSkills(this.appConfig.functionsUrl);
  }
}
