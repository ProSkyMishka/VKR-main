import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_011', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai011-n: 111/i)).toBeInTheDocument();
    expect(screen.getByText(/ai011-s: ai011-name/i)).toBeInTheDocument();
  });
});
