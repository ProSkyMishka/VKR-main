import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: vstack_five_lines', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/One/i)).toBeInTheDocument();
    expect(screen.getByText(/Two/i)).toBeInTheDocument();
    expect(screen.getByText(/Three/i)).toBeInTheDocument();
    expect(screen.getByText(/Four/i)).toBeInTheDocument();
    expect(screen.getByText(/Five/i)).toBeInTheDocument();
  });
});
