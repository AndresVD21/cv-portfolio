import React from 'react';
import Main from '../components/main/main';

import './cv-react-feature-main.scss';

/* eslint-disable-next-line */
export interface CvReactFeatureMainProps {
  apiUrl: string;
}

export const CvReactFeatureMain: React.FC<CvReactFeatureMainProps> = ({
  apiUrl,
}) => {
  return <Main apiUrl={apiUrl} />;
};
