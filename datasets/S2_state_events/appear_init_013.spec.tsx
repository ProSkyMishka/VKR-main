import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_013', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai013-n: 113/i)).toBeInTheDocument();
    expect(screen.getByText(/ai013-s: ai013-name/i)).toBeInTheDocument();
  });
});
