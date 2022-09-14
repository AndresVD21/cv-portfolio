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
import {
  Footer,
  Header,
  Loading,
  NoData,
  Space,
} from '@cv-portfolio/shared/react-ui';
import { getLanguages } from '../../services/languages.service';
import { Languages } from '../languages/languages';
import { reorderLanguages, reorderSkills } from '@cv-portfolio/utils';
import { finalize, Subject, takeUntil } from 'rxjs';

/* eslint-disable-next-line */
export interface SkillsProps {
  apiUrl: string;
  functionsUrl: string;
}

export const Skills: React.FC<SkillsProps> = ({ apiUrl, functionsUrl }) => {
  const $destroy = new Subject<boolean>();

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
  const [loadingSkills, setLoadingSkills] = useState(false);
  const [loadingLangs, setLoadingLangs] = useState(false);
  const loadingMessage = {
    skills: 'Loading skills...',
    langs: 'Loading languages...',
  };

  useEffect(() => {
    getSkills();
    getLanguagesList();

    return () => {
      $destroy.next(true);
      $destroy.unsubscribe();
    };
  }, []);

  const getSkills = () => {
    setLoadingSkills(true);
    getSkillList(functionsUrl)
      .pipe(
        finalize(() => setLoadingSkills(false)),
        takeUntil($destroy)
      )
      .subscribe(({ data }) => {
        setSkills(data ? [...reorderSkills(data)] : []);
      });
  };

  const getLanguagesList = async () => {
    setLoadingLangs(true);
    getLanguages(functionsUrl)
      .pipe(
        finalize(() => setLoadingLangs(false)),
        takeUntil($destroy)
      )
      .subscribe(({ data }) => {
        setLanguages(data ? [...reorderLanguages(data)] : []);
      });
  };

  return (
    <main className="cv-portfolio-skills-container feature-container">
      <Header />
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
            {loadingSkills ? (
              <Loading loadingMessage={loadingMessage.skills} />
            ) : skills.length > 0 ? (
              skills.map((skill) => (
                <Skill
                  key={skill.skillId}
                  skill={skill}
                  numberOfBars={numberOfBars}
                />
              ))
            ) : (
              <NoData noDataText="There are no skills registered." />
            )}
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
            {loadingLangs ? (
              <Loading loadingMessage={loadingMessage.langs} />
            ) : languages.length > 0 ? (
              <Languages languages={languages} />
            ) : (
              <NoData noDataText="There are no languages registered." />
            )}
          </details>
        </section>
      </div>
      <Footer />
    </main>
  );
};
