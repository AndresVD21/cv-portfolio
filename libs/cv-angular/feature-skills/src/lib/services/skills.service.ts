import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<ResponseModel<SkillModel[]>> {
    return this.httpClient.get<ResponseDTO<SkillDTO[]>>('/api/skills');
  }
}
