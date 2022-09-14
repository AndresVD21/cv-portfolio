import './cv-react-feature-skills.scss';
import { Skills } from './components/skills/skills';
import React from 'react';

/* eslint-disable-next-line */
export interface CvReactFeatureSkillsProps {
  apiUrl: string;
  functionsUrl: string;
}

export const CvReactFeatureSkills: React.FC<CvReactFeatureSkillsProps> = ({
  apiUrl,
  functionsUrl,
}) => {
  return <Skills apiUrl={apiUrl} functionsUrl={functionsUrl} />;
};
