import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_indexed_002', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/lx002-row 1/i)).toBeInTheDocument();
    expect(screen.getByText(/lx002-row 7/i)).toBeInTheDocument();
  });
});
