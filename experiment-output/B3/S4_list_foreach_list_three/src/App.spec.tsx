import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_three', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/X/i)).toBeInTheDocument();
    expect(screen.getByText(/Y/i)).toBeInTheDocument();
    expect(screen.getByText(/Z/i)).toBeInTheDocument();
  });
});
