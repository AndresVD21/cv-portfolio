import { ResponseDTO, SkillDTO } from '@cv-portfolio/data';
import axios from 'axios';

export const getSkillList = (apiUrl: string) => {
  return axios.get<ResponseDTO<SkillDTO[]>>(`${apiUrl}/api/skills`);
};
