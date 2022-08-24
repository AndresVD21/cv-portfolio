// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import { CvReactFeatureMain } from '@cv-portfolio/cv-react/feature-main';
import { CvReactFeatureSkills } from '@cv-portfolio/cv-react/feature-skills';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '@cv-portfolio/shared/react-ui';

export function App() {
  return (
    <>
      <div className="cv-portfolio-container">
        <Routes>
          <Route path="/" element={<CvReactFeatureMain />} />
          <Route path="skills" element={<CvReactFeatureSkills />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
