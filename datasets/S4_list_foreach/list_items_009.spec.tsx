import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_items_009', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/li009-it1/i)).toBeInTheDocument();
    expect(screen.getByText(/li009-it7/i)).toBeInTheDocument();
  });
});
