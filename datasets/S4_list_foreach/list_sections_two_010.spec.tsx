import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_sections_two_010', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/ls010-A1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls010-A2/i)).toBeInTheDocument();
    expect(screen.getByText(/ls010-B1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls010-B2/i)).toBeInTheDocument();
  });
});
