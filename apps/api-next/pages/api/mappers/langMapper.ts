import { LanguageModel, LanguageDTO } from '@cv-portfolio/data';

export const mapLanguages = (langs: LanguageModel[]): LanguageDTO[] => {
  return langs.map((lang) => {
    return { ...lang };
  });
};
