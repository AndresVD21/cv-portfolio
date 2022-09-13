// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import { CvReactFeatureMain } from '@cv-portfolio/cv-react/feature-main';
import { CvReactFeatureSkills } from '@cv-portfolio/cv-react/feature-skills';
import { Route, Routes } from 'react-router-dom';
import { environment } from '../environments/environment';

export function App() {
  return (
    <div className="cv-portfolio-container">
      <Routes>
        <Route
          path="/"
          element={<CvReactFeatureMain apiUrl={environment.apiUrl} />}
        />
        <Route
          path="skills"
          element={<CvReactFeatureSkills apiUrl={environment.apiUrl} />}
        />
      </Routes>
    </div>
  );
}

export default App;
