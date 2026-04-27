import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_007', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai007-n: 107/i)).toBeInTheDocument();
    expect(screen.getByText(/ai007-s: ai007-name/i)).toBeInTheDocument();
  });
});
