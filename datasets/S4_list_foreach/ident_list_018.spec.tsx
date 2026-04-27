import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_018', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id018-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id018-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id018-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id018-delta/i)).toBeInTheDocument();
  });
});
