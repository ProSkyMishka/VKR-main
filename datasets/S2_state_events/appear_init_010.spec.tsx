import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_010', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai010-n: 110/i)).toBeInTheDocument();
    expect(screen.getByText(/ai010-s: ai010-name/i)).toBeInTheDocument();
  });
});
