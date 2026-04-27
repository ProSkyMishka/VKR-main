import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_014', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id014-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id014-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id014-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id014-delta/i)).toBeInTheDocument();
  });
});
