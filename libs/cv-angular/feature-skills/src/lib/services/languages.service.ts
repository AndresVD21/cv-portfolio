import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@cv-portfolio/app-config';
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
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private httpClient: HttpClient
  ) {}

  getLanguages(): Observable<ResponseModel<LanguageModel[]>> {
    return this.httpClient.get<ResponseDTO<LanguageDTO[]>>(
      `${this.appConfig.apiUrl}/api/langs`
    );
  }
}
