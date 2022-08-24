import { Express } from 'express';
import { ResponseDTO, SkillModel, SkillDTO } from '@cv-portfolio/data';
import { mapSkills } from './mappers/skillMapper';

const skills: SkillModel[] = [
  { skillId: 'html', skillName: 'HTML5', skillLevel: 90 },
  { skillId: 'js', skillName: 'Javascript', skillLevel: 80 },
  { skillId: 'css', skillName: 'CSS3', skillLevel: 75 },
  { skillId: 'angular', skillName: 'Angular', skillLevel: 90 },
  // { skillId: 'scss', skillName: 'Scss', skillLevel: 70 },
  // { skillId: 'git', skillName: 'Git', skillLevel: 70 },
  // { skillId: 'redux', skillName: 'Redux', skillLevel: 70 },
  // { skillId: 'react', skillName: 'React', skillLevel: 50 },
  // { skillId: 'node', skillName: 'Node/Express', skillLevel: 20 },
];

export function getSkills(app: Express) {
  const response: ResponseDTO<SkillDTO[]> = {
    data: mapSkills(skills),
  };
  app.get('/api/skills', (req, res) => res.send(response));
}
