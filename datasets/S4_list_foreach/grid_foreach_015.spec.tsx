import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: grid_foreach_015', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/gf015-r0c0/i)).toBeInTheDocument();
    expect(screen.getByText(/gf015-r4c1/i)).toBeInTheDocument();
  });
});
