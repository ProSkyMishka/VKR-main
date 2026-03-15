import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_with_view', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/One/i)).toBeInTheDocument();
    expect(screen.getByText(/Three/i)).toBeInTheDocument();
  });
});
