import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_007', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id007-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id007-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id007-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id007-delta/i)).toBeInTheDocument();
  });
});
