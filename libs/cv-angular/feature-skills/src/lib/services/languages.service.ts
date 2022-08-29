import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LanguageDTO,
  LanguageModel,
  ResponseDTO,
  ResponseModel,
} from '@cv-portfolio/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  constructor(private httpClient: HttpClient) {}

  getLanguages(): Observable<ResponseModel<LanguageModel[]>> {
    return this.httpClient.get<ResponseDTO<LanguageDTO[]>>('/api/langs');
  }
}
