import { LanguageDTO, ResponseDTO } from '@cv-portfolio/data';
import axios from 'axios';

export const getLanguages = () => {
  return axios.get<ResponseDTO<LanguageDTO[]>>('/api/langs');
};
