import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ident_list_012', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/id012-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/id012-beta/i)).toBeInTheDocument();
    expect(screen.getByText(/id012-gamma/i)).toBeInTheDocument();
    expect(screen.getByText(/id012-delta/i)).toBeInTheDocument();
  });
});
