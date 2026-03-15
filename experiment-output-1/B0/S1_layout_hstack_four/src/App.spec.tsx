import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: hstack_four', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByText(/2/)).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
    expect(screen.getByText(/4/)).toBeInTheDocument();
  });
});
