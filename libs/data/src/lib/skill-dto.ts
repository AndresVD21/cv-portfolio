export class SkillDTO {
  skillId: string;
  skillName: string;
  skillLevel: number;

  constructor(skillId: string, skillName: string, skillLevel: number) {
    this.skillId = skillId;
    this.skillName = skillName;
    this.skillLevel = skillLevel;
  }
}
