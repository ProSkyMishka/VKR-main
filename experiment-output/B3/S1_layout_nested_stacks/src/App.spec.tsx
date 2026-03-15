import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: nested_stacks', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/A/i)).toBeInTheDocument();
    expect(screen.getByText(/B/i)).toBeInTheDocument();
    expect(screen.getByText(/C/i)).toBeInTheDocument();
    expect(screen.getByText(/D/i)).toBeInTheDocument();
  });
});
