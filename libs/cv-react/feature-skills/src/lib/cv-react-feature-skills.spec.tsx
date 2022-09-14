import { render } from '@testing-library/react';

import CvReactFeatureSkills from './cv-react-feature-skills';

describe('CvReactFeatureSkills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CvReactFeatureSkills />);
    expect(baseElement).toBeTruthy();
  });
});
