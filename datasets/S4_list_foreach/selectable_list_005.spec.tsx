import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: selectable_list_005', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/sl005-picked/i)).toBeInTheDocument();
    expect(screen.getByText(/sl005-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/sl005-beta/i)).toBeInTheDocument();
  });
});
