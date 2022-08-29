import { LanguageModel, LanguageDTO, ResponseDTO } from '@cv-portfolio/data';
import { Express } from 'express';
import { mapLanguages } from './mappers/langMapper';

const languagues: LanguageModel[] = [
  {
    langId: 'en',
    langName: 'English',
    langDesc:
      'Very good with listening, writing and speaking, still learning to have more vocabulary',
    isNative: false,
  },
  {
    langId: 'es',
    langName: 'Spanish',
    langDesc: 'Is my native language 🇨🇴',
    isNative: true,
  },
  {
    langId: 'fr',
    langName: 'French',
    langDesc: "Just the basics like, je m'appelle Andrés!",
    isNative: false,
  },
];

export function getLanguages(app: Express) {
  const response: ResponseDTO<LanguageDTO[]> = {
    data: mapLanguages(languagues),
  };
  app.get('/api/langs', (req, res) => res.send(response));
}
