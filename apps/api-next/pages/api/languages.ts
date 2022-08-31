import { LanguageDTO, LanguageModel, ResponseDTO } from '@cv-portfolio/data';
import { mapLanguages } from '../../mappers/langMapper';

const languages: LanguageModel[] = [
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

export default function handler(req, res) {
  const response: ResponseDTO<LanguageDTO[]> = {
    data: mapLanguages(languages),
  };
  res.status(200).json(response);
}
