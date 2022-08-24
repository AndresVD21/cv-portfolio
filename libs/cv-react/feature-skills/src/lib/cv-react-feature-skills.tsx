import { Header } from '@cv-portfolio/shared/react-ui';
import { Skills } from './components/skills/skills';

/* eslint-disable-next-line */
export interface CvReactFeatureSkillsProps {}

export function CvReactFeatureSkills(props: CvReactFeatureSkillsProps) {
  return (
    <main className="cv-portfolio-skills-container">
      <Header />
      <Skills />
    </main>
  );
}

export default CvReactFeatureSkills;
