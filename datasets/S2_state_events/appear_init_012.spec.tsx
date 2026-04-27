import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_012', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai012-n: 112/i)).toBeInTheDocument();
    expect(screen.getByText(/ai012-s: ai012-name/i)).toBeInTheDocument();
  });
});
