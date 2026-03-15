import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: vstack_gap_8', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/A/i)).toBeInTheDocument();
    expect(screen.getByText(/B/i)).toBeInTheDocument();
    expect(screen.getByText(/C/i)).toBeInTheDocument();
  });
});
