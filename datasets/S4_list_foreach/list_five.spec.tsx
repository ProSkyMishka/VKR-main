import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_five', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
});
