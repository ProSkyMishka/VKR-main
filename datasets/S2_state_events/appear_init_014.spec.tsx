import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_014', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai014-n: 114/i)).toBeInTheDocument();
    expect(screen.getByText(/ai014-s: ai014-name/i)).toBeInTheDocument();
  });
});
