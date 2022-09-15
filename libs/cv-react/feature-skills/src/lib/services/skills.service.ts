import { ResponseDTO, SkillDTO } from '@cv-portfolio/data';
// import { getSkills } from '@cv-portfolio/data-access';
import axios from 'axios';
import { from } from 'rxjs';

export const getSkillList = (apiUrl: string) => {
  // return getSkills(apiUrl);
  return from(axios.get<ResponseDTO<SkillDTO[]>>(`${apiUrl}/api/skills`));
};
