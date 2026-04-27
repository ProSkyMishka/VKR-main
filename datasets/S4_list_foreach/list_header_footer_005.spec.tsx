import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_header_footer_005', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/hf005-header/i)).toBeInTheDocument();
    expect(screen.getByText(/hf005-i1/i)).toBeInTheDocument();
    expect(screen.getByText(/hf005-footer/i)).toBeInTheDocument();
  });
});
