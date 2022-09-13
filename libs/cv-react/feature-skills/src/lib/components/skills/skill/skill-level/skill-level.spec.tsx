import { render } from '@testing-library/react';

import SkillLevel from './skill-level';

describe('SkillLevel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillLevel />);
    expect(baseElement).toBeTruthy();
  });
});
