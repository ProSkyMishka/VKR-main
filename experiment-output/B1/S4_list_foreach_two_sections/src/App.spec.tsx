import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: two_sections', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/A1/i)).toBeInTheDocument();
    expect(screen.getByText(/B1/i)).toBeInTheDocument();
  });
});
