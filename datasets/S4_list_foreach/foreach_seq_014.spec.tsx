import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_seq_014', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/fs014-row 0/i)).toBeInTheDocument();
    expect(screen.getByText(/fs014-row 17/i)).toBeInTheDocument();
  });
});
