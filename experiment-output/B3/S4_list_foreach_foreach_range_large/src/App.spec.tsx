import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_range_large', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/Item 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 19/i)).toBeInTheDocument();
  });
});
