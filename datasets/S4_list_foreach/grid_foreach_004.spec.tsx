import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: grid_foreach_004', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/gf004-r0c0/i)).toBeInTheDocument();
    expect(screen.getByText(/gf004-r1c2/i)).toBeInTheDocument();
  });
});
