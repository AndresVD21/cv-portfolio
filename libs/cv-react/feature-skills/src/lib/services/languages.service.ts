import { LanguageDTO, ResponseDTO } from '@cv-portfolio/data';
import axios from 'axios';

export const getLanguages = (apiUrl: string) => {
  return axios.get<ResponseDTO<LanguageDTO[]>>(`${apiUrl}/api/langs`);
};
