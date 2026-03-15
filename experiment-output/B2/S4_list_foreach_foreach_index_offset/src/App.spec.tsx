import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_index_offset', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/Row 1/i)).toBeInTheDocument();
  });
});
