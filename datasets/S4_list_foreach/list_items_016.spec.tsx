import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_items_016', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/li016-it1/i)).toBeInTheDocument();
    expect(screen.getByText(/li016-it8/i)).toBeInTheDocument();
  });
});
