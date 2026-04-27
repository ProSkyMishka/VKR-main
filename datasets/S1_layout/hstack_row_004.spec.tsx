import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_004', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr004-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr004-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr004-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr004-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr004-c4/i)).toBeInTheDocument();
    expect(screen.getByText(/hr004-c5/i)).toBeInTheDocument();
    expect(screen.getByText(/hr004-c6/i)).toBeInTheDocument();
    expect(screen.getByText(/hr004-c7/i)).toBeInTheDocument();
  });
});
