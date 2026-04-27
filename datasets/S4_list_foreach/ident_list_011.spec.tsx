import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_011', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id011-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id011-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id011-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id011-delta/i)).toBeInTheDocument();
  });
});
