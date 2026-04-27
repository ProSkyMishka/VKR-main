import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_header_footer_007', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/hf007-header/i)).toBeInTheDocument();
    expect(screen.getByText(/hf007-i1/i)).toBeInTheDocument();
    expect(screen.getByText(/hf007-footer/i)).toBeInTheDocument();
  });
});
