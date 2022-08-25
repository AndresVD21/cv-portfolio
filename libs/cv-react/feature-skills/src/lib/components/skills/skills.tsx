import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import './skills.scss';
import {
  faAngular,
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { Skill } from './skill/skill';
import { SkillModel } from '@cv-portfolio/data';
import { useEffect, useState } from 'react';
import { getSkillList } from '../../services/skills.service';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = (props: SkillsProps) => {
  library.add(
    faHtml5,
    faJs,
    faCss3,
    faAngular,
    faReact,
    faSass,
    faGit,
    faWandSparkles
  );

  const numberOfBars = 4;
  const [skills, setSkills] = useState<SkillModel[]>([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const {
      data: { data },
    } = await getSkillList();
    setSkills(data ? [...data] : []);
  };
  return (
    <>
      <section className="working-technologies">
        <h1 className="title">Technologies on my toolbox</h1>
        <div className="technologies-container">
          <FontAwesomeIcon icon={faHtml5} className="tech-icon html-orange" />
          <FontAwesomeIcon icon={faJs} className="tech-icon js-yellow" />
          <FontAwesomeIcon icon={faCss3} className="tech-icon css-blue" />
          <FontAwesomeIcon icon={faAngular} className="tech-icon angular-red" />
          <FontAwesomeIcon icon={faReact} className="tech-icon react-blue" />
          <FontAwesomeIcon icon={faSass} className="tech-icon rose" />
          <FontAwesomeIcon icon={faGit} className="tech-icon git-orange" />
        </div>
      </section>
      <section className="skills container">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faWandSparkles} />
          <span> </span>
          Skills
        </h2>
        {skills.map((skill) => (
          <Skill
            key={skill.skillId}
            skill={skill}
            numberOfBars={numberOfBars}
          />
        ))}
      </section>
    </>
  );
};
