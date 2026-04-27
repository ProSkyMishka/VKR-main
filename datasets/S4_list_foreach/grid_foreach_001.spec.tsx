import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: grid_foreach_001', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/gf001-r0c0/i)).toBeInTheDocument();
    expect(screen.getByText(/gf001-r2c3/i)).toBeInTheDocument();
  });
});
