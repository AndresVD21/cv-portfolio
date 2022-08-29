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
import { LanguageModel, SkillModel } from '@cv-portfolio/data';
import { useEffect, useState } from 'react';
import { getSkillList } from '../../services/skills.service';
import { faLanguage, faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { Space } from '@cv-portfolio/shared/react-ui';
import { getLanguages } from '../../services/languages.service';
import { Languages } from '../languages/languages';
import { reorderLanguages } from '@cv-portfolio/utils';

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
    faWandSparkles,
    faLanguage
  );

  const numberOfBars = 4;
  const [skills, setSkills] = useState<SkillModel[]>([]);
  const [languages, setLanguages] = useState<LanguageModel[]>([]);

  useEffect(() => {
    getSkills();
    getLanguagesList();
  }, []);

  const getSkills = async () => {
    const {
      data: { data },
    } = await getSkillList();
    setSkills(data ? [...data] : []);
  };

  const getLanguagesList = async () => {
    const {
      data: { data },
    } = await getLanguages();
    setLanguages(data ? [...reorderLanguages(data)] : []);
  };

  return (
    <>
      <section className="working-technologies container">
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
      <div className="wrapper">
        <section className="skills container">
          <details>
            <summary>
              <h2 className="section-title cursor-pointer">
                <FontAwesomeIcon icon={faWandSparkles} />
                <Space />
                Skills
              </h2>
            </summary>
            {skills.map((skill) => (
              <Skill
                key={skill.skillId}
                skill={skill}
                numberOfBars={numberOfBars}
              />
            ))}
          </details>
        </section>
        <section className="container">
          <details open>
            <summary>
              <h2 className="section-title cursor-pointer">
                <FontAwesomeIcon icon={faLanguage} />
                <Space />
                Languages
              </h2>
            </summary>
            <Languages languages={languages} />
          </details>
        </section>
      </div>
    </>
  );
};
