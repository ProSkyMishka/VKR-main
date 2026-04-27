import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_003', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id003-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id003-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id003-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id003-delta/i)).toBeInTheDocument();
  });
});
