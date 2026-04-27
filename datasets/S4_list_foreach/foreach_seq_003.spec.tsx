import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_seq_003', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fs003-row 0/i)).toBeInTheDocument();
    expect(screen.getByText(/fs003-row 6/i)).toBeInTheDocument();
  });
});
