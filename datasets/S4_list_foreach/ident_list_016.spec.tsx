import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_016', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id016-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id016-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id016-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id016-delta/i)).toBeInTheDocument();
  });
});
