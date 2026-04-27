import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_header_footer_004', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/hf004-header/i)).toBeInTheDocument();
    expect(screen.getByText(/hf004-i1/i)).toBeInTheDocument();
    expect(screen.getByText(/hf004-footer/i)).toBeInTheDocument();
  });
});
