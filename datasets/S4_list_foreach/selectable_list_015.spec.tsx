import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: selectable_list_015', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/sl015-picked/i)).toBeInTheDocument();
    expect(screen.getByText(/sl015-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/sl015-beta/i)).toBeInTheDocument();
  });
});
