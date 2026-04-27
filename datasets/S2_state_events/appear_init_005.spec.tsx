import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_005', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai005-n: 105/i)).toBeInTheDocument();
    expect(screen.getByText(/ai005-s: ai005-name/i)).toBeInTheDocument();
  });
});
