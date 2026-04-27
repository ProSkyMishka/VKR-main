import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_sections_two_012', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/ls012-A1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls012-A2/i)).toBeInTheDocument();
    expect(screen.getByText(/ls012-B1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls012-B2/i)).toBeInTheDocument();
  });
});
