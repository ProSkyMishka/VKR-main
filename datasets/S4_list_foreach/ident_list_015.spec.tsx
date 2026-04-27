import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_015', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id015-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id015-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id015-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id015-delta/i)).toBeInTheDocument();
  });
});
