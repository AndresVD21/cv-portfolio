// import { LanguageDTO, ResponseDTO } from '@cv-portfolio/data';
// import axios from 'axios';
import { getLanguages as getLangs } from '@cv-portfolio/data-access';

export const getLanguages = (apiUrl: string) => {
  return getLangs(apiUrl);
  // return axios.get<ResponseDTO<LanguageDTO[]>>(`${apiUrl}/api/langs`);
};
