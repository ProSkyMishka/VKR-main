import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_013', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr013-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr013-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr013-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr013-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr013-c4/i)).toBeInTheDocument();
    expect(screen.getByText(/hr013-c5/i)).toBeInTheDocument();
    expect(screen.getByText(/hr013-c6/i)).toBeInTheDocument();
  });
});
