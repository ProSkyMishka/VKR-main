import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_017', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr017-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr017-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr017-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr017-c3/i)).toBeInTheDocument();
    expect(screen.getByText(/hr017-c4/i)).toBeInTheDocument();
    expect(screen.getByText(/hr017-c5/i)).toBeInTheDocument();
  });
});
