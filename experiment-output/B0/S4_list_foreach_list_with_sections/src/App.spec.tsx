import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_with_sections', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/Section A/i)).toBeInTheDocument();
    expect(screen.getByText(/Section B/i)).toBeInTheDocument();
  });
});
