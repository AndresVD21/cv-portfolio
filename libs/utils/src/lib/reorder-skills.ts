import { SkillModel } from '@cv-portfolio/data';

export const reorderSkills = (skills: SkillModel[]) => {
  return skills.sort(compare);
};

const compare = (a: SkillModel, b: SkillModel) => {
  if (a.skillLevel > b.skillLevel) {
    return -1;
  }
  if (b.skillLevel > a.skillLevel) {
    return 1;
  }
  return 0;
};
