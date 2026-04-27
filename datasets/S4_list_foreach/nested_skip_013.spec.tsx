import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: nested_skip_013', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/ns013-r0c0/i)).toBeInTheDocument();
    expect(screen.getByText(/ns013-skip1/i)).toBeInTheDocument();
    expect(screen.getByText(/ns013-r2c0/i)).toBeInTheDocument();
  });
});
