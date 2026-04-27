import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_017', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id017-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id017-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id017-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id017-delta/i)).toBeInTheDocument();
  });
});
