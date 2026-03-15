import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: vstack_gap_24', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Line 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Line 2/i)).toBeInTheDocument();
  });
});
