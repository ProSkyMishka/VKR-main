import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: hstack_colors', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/R/)).toBeInTheDocument();
    expect(screen.getByText(/G/)).toBeInTheDocument();
    expect(screen.getByText(/B/)).toBeInTheDocument();
  });
});
