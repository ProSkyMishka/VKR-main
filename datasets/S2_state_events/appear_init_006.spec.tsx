import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_006', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai006-n: 106/i)).toBeInTheDocument();
    expect(screen.getByText(/ai006-s: ai006-name/i)).toBeInTheDocument();
  });
});
