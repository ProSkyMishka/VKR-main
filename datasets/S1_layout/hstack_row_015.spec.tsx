import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: hstack_row_015', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hr015-•/i)).toBeInTheDocument();
    expect(screen.getByText(/hr015-c1/i)).toBeInTheDocument();
    expect(screen.getByText(/hr015-c2/i)).toBeInTheDocument();
    expect(screen.getByText(/hr015-c3/i)).toBeInTheDocument();
  });
});
