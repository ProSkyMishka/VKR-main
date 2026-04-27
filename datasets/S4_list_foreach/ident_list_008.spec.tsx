import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_008', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id008-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id008-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id008-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id008-delta/i)).toBeInTheDocument();
  });
});
