import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_009', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id009-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id009-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id009-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id009-delta/i)).toBeInTheDocument();
  });
});
