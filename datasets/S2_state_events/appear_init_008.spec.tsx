import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: appear_init_008', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/ai008-n: 108/i)).toBeInTheDocument();
    expect(screen.getByText(/ai008-s: ai008-name/i)).toBeInTheDocument();
  });
});
