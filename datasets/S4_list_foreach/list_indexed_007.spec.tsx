import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_indexed_007', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/lx007-row 1/i)).toBeInTheDocument();
    expect(screen.getByText(/lx007-row 12/i)).toBeInTheDocument();
  });
});
