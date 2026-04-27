import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: selectable_list_006', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/sl006-picked/i)).toBeInTheDocument();
    expect(screen.getByText(/sl006-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/sl006-beta/i)).toBeInTheDocument();
  });
});
