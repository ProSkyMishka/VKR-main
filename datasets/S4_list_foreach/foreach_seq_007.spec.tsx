import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_seq_007', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fs007-row 0/i)).toBeInTheDocument();
    expect(screen.getByText(/fs007-row 10/i)).toBeInTheDocument();
  });
});
