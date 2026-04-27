import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_003', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai003-n: 103/i)).toBeInTheDocument();
    expect(screen.getByText(/ai003-s: ai003-name/i)).toBeInTheDocument();
  });
});
