// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CvReactFeatureMain } from '@cv-portfolio/cv-react/feature-main';
import { CvReactFeatureSkills } from '@cv-portfolio/cv-react/feature-skills';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<CvReactFeatureMain />} />
      <Route path="skills" element={<CvReactFeatureSkills />} />
    </Routes>
  );
}

export default App;
