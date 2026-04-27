import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_010', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id010-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id010-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id010-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id010-delta/i)).toBeInTheDocument();
  });
});
