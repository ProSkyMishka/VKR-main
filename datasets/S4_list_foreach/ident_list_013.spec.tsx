import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_013', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id013-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id013-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id013-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id013-delta/i)).toBeInTheDocument();
  });
});
