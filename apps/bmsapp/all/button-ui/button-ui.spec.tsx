import { render } from '@testing-library/react';

import ButtonUi from './button-ui';

describe('ButtonUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonUi />);
    expect(baseElement).toBeTruthy();
  });
});
