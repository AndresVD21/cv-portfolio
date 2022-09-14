export class LanguageDTO {
  langId: string;
  langName: string;
  langDesc: string;
  isNative: boolean;

  constructor(
    langId: string,
    langName: string,
    langDesc: string,
    isNative: boolean
  ) {
    this.langId = langId;
    this.langName = langName;
    this.langDesc = langDesc;
    this.isNative = isNative;
  }
}
