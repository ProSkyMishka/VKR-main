import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: selectable_list_016', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/sl016-picked/i)).toBeInTheDocument();
    expect(screen.getByText(/sl016-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/sl016-beta/i)).toBeInTheDocument();
  });
});
