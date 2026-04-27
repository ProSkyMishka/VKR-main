import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_009', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai009-n: 109/i)).toBeInTheDocument();
    expect(screen.getByText(/ai009-s: ai009-name/i)).toBeInTheDocument();
  });
});
