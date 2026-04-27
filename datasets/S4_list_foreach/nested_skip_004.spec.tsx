import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: nested_skip_004', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/ns004-r0c0/i)).toBeInTheDocument();
    expect(screen.getByText(/ns004-skip1/i)).toBeInTheDocument();
    expect(screen.getByText(/ns004-r2c0/i)).toBeInTheDocument();
  });
});
