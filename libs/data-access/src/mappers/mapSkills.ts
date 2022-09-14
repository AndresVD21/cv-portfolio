import { SkillDTO } from '@cv-portfolio/data';
import * as admin from 'firebase-admin';

export const mapSkills = (
  skills: admin.firestore.QuerySnapshot<admin.firestore.DocumentData>
): SkillDTO[] => {
  const arr: SkillDTO[] = [];
  skills.forEach((skill) => {
    //   console.log(skill);
    //   // const skillObj: SkillDTO = {
    //   //   skillName: skill.data().skillName,
    //   //   skillId: skill.data().skillId,
    //   //   skillLevel: skill.data().skillLevel,
    //   // };
    //   // arr.push(skillObj);
  });
  return arr;
};
