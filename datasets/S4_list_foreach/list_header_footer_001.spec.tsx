import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_header_footer_001', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/hf001-header/i)).toBeInTheDocument();
    expect(screen.getByText(/hf001-i1/i)).toBeInTheDocument();
    expect(screen.getByText(/hf001-footer/i)).toBeInTheDocument();
  });
});
