import { SkillModel } from '@cv-portfolio/data';
import SkillLevel from './skill-level/skill-level';
import './skill.scss';

/* eslint-disable-next-line */
export interface SkillProps {
  skill: SkillModel;
  numberOfBars: number;
}

export const Skill: React.FC<SkillProps> = ({ skill, numberOfBars }) => {
  const gridColumns = {
    gridTemplateColumns: `repeat(${numberOfBars}, 1fr)`,
  };
  const skillBase = (i: number) => ((i + 1) * 100) / numberOfBars;
  return (
    <div className="skill" style={gridColumns}>
      <span className="skill-name">
        {skill.skillName}
        <span> </span>
        <span className="skill-level-num">({skill.skillLevel})</span>
      </span>
      {[...Array(numberOfBars)].map((level, i) => (
        <SkillLevel
          key={`${skill.skillId}-${skillBase(i)}`}
          numberOfBars={numberOfBars}
          level={skill.skillLevel}
          base={skillBase(i)}
        />
      ))}
    </div>
  );
};
