import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_014', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr014-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr014-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr014-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr014-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr014-c4/i)).toBeInTheDocument();
    expect(screen.getByText(/hr014-c5/i)).toBeInTheDocument();
    expect(screen.getByText(/hr014-c6/i)).toBeInTheDocument();
    expect(screen.getByText(/hr014-c7/i)).toBeInTheDocument();
  });
});
