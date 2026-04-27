import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_001', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai001-n: 101/i)).toBeInTheDocument();
    expect(screen.getByText(/ai001-s: ai001-name/i)).toBeInTheDocument();
  });
});
