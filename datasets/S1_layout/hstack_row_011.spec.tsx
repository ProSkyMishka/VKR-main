import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_011', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr011-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr011-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr011-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr011-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr011-c4/i)).toBeInTheDocument();
  });
});
