import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_seq_004', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fs004-row 0/i)).toBeInTheDocument();
    expect(screen.getByText(/fs004-row 7/i)).toBeInTheDocument();
  });
});
