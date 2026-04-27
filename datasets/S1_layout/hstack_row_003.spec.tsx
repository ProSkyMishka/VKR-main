import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_003', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr003-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr003-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr003-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr003-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr003-c4/i)).toBeInTheDocument();
    expect(screen.getByText(/hr003-c5/i)).toBeInTheDocument();
    expect(screen.getByText(/hr003-c6/i)).toBeInTheDocument();
  });
});
