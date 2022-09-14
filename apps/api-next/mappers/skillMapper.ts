import { SkillModel, SkillDTO } from '@cv-portfolio/data';

export const mapSkills = (skills: SkillModel[]): SkillDTO[] => {
  return skills.map((skill) => {
    return { ...skill };
  });
};
