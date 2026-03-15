import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_static_three', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/Alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/Gamma/i)).toBeInTheDocument();
  });
});
