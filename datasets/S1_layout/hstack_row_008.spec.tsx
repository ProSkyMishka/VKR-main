import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_008', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr008-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr008-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr008-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr008-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr008-c4/i)).toBeInTheDocument();
    expect(screen.getByText(/hr008-c5/i)).toBeInTheDocument();
    expect(screen.getByText(/hr008-c6/i)).toBeInTheDocument();
  });
});
