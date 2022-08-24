import { ResponseDTO, SkillDTO } from '@cv-portfolio/data';
import axios from 'axios';

export const getSkillList = () => {
  return axios.get<ResponseDTO<SkillDTO[]>>('/api/skills');
};
