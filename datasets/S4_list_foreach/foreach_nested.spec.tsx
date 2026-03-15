import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_nested', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/a/i)).toBeInTheDocument();
    expect(screen.getByText(/c/i)).toBeInTheDocument();
  });
});
