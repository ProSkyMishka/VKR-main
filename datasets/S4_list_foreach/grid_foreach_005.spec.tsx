import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: grid_foreach_005', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/gf005-r0c0/i)).toBeInTheDocument();
    expect(screen.getByText(/gf005-r2c3/i)).toBeInTheDocument();
  });
});
