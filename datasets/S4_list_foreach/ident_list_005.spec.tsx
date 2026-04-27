import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_005', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id005-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id005-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id005-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id005-delta/i)).toBeInTheDocument();
  });
});
