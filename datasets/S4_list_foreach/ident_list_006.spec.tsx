import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_006', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id006-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id006-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id006-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id006-delta/i)).toBeInTheDocument();
  });
});
