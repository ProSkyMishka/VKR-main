import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_004', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai004-n: 104/i)).toBeInTheDocument();
    expect(screen.getByText(/ai004-s: ai004-name/i)).toBeInTheDocument();
  });
});
