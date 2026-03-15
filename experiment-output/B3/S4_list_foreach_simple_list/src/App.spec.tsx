import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: simple_list', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/Banana/i)).toBeInTheDocument();
    expect(screen.getByText(/Cherry/i)).toBeInTheDocument();
  });
});
