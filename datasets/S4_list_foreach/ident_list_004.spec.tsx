import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_004', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id004-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id004-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id004-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id004-delta/i)).toBeInTheDocument();
  });
});
