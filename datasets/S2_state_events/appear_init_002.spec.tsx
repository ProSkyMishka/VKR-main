import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_002', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai002-n: 102/i)).toBeInTheDocument();
    expect(screen.getByText(/ai002-s: ai002-name/i)).toBeInTheDocument();
  });
});
