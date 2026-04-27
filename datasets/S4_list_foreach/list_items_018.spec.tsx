import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_items_018', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/li018-it1/i)).toBeInTheDocument();
    expect(screen.getByText(/li018-it4/i)).toBeInTheDocument();
  });
});
