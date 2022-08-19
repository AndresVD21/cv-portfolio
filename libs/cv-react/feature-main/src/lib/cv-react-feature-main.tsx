import { Header } from '@cv-portfolio/shared/react-ui';
import Main from '../components/main/main';

import './cv-react-feature-main.scss';

/* eslint-disable-next-line */
export interface CvReactFeatureMainProps {}

export function CvReactFeatureMain(props: CvReactFeatureMainProps) {
  return (
    <>
      <Header>
        <div className="name-container">
          <h1 className="name">Andres Valencia Diaz</h1>
          <p className="resume">
            Nice to meet you! I'm Andrés from Colombia
            <span role="img" aria-label="colombia flag">
              🇨🇴
            </span>
            , Frontend developer who really likes to learn and try new things in
            this vast world of technology!
          </p>
        </div>
      </Header>
      <Main />
    </>
  );
}

export default CvReactFeatureMain;
