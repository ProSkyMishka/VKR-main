import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: filtered_list_010', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fl010-n: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/fl010-n: 8/i)).toBeInTheDocument();
  });
});
