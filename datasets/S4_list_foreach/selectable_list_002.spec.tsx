import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: selectable_list_002', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/sl002-picked/i)).toBeInTheDocument();
    expect(screen.getByText(/sl002-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/sl002-beta/i)).toBeInTheDocument();
  });
});
