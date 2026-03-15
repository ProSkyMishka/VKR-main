import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: hstack_four', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});
