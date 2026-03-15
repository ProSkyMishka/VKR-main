import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: nested_stacks', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/A/)).toBeInTheDocument();
    expect(screen.getByText(/B/)).toBeInTheDocument();
    expect(screen.getByText(/C/)).toBeInTheDocument();
    expect(screen.getByText(/D/)).toBeInTheDocument();
  });
});
