import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_seq_005', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fs005-row 0/i)).toBeInTheDocument();
    expect(screen.getByText(/fs005-row 8/i)).toBeInTheDocument();
  });
});
