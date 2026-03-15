import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_with_ids', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/A/i)).toBeInTheDocument();
    expect(screen.getByText(/B/i)).toBeInTheDocument();
  });
});
