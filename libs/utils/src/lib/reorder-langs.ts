import { LanguageModel } from '@cv-portfolio/data';

export const reorderLanguages = (langs: LanguageModel[]) => {
  return langs.sort(compare);
};

const compare = (a: LanguageModel, b: LanguageModel) => {
  if (a.isNative) {
    return -1;
  }
  if (b.isNative) {
    return 1;
  }
  return 0;
};
