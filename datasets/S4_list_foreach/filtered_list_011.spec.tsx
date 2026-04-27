import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: filtered_list_011', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fl011-n: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/fl011-n: 8/i)).toBeInTheDocument();
  });
});
