import { render } from '@testing-library/react';

import AddBox from '.';

describe('AddBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddBox />);
    expect(baseElement).toBeTruthy();
  });
});
