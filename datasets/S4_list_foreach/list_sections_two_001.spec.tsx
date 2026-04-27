import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_sections_two_001', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/ls001-A1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls001-A2/i)).toBeInTheDocument();
    expect(screen.getByText(/ls001-B1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls001-B2/i)).toBeInTheDocument();
  });
});
