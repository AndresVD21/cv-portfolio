import { render } from '@testing-library/react';

import CvReactFeatureMain from './cv-react-feature-main';

describe('CvReactFeatureMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CvReactFeatureMain />);
    expect(baseElement).toBeTruthy();
  });
});
