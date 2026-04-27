import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: selectable_list_017', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/sl017-picked/i)).toBeInTheDocument();
    expect(screen.getByText(/sl017-alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/sl017-beta/i)).toBeInTheDocument();
  });
});
