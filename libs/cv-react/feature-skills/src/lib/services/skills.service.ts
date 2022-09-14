import { ResponseDTO, SkillDTO } from '@cv-portfolio/data';
// import { getSkills } from '@cv-portfolio/data-access';
import axios from 'axios';

export const getSkillList = (apiUrl: string) => {
  // return getSkills(apiUrl);
  return axios.get<ResponseDTO<SkillDTO[]>>(`${apiUrl}/api/skills`);
};
