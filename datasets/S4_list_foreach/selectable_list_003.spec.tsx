import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: selectable_list_003', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/sl003-picked/i)).toBeInTheDocument();
    expect(screen.getByText(/sl003-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/sl003-beta/i)).toBeInTheDocument();
  });
});
