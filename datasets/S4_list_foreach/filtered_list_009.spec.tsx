import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: filtered_list_009', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fl009-n: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/fl009-n: 8/i)).toBeInTheDocument();
  });
});
