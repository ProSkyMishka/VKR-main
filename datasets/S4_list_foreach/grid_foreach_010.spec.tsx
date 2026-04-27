import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: grid_foreach_010', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/gf010-r0c0/i)).toBeInTheDocument();
    expect(screen.getByText(/gf010-r3c4/i)).toBeInTheDocument();
  });
});
