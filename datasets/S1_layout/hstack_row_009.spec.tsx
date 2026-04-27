import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_009', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr009-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr009-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr009-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr009-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr009-c4/i)).toBeInTheDocument();
    expect(screen.getByText(/hr009-c5/i)).toBeInTheDocument();
    expect(screen.getByText(/hr009-c6/i)).toBeInTheDocument();
    expect(screen.getByText(/hr009-c7/i)).toBeInTheDocument();
  });
});
