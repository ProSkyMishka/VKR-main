import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_sections_two_009', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/ls009-A1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls009-A2/i)).toBeInTheDocument();
    expect(screen.getByText(/ls009-B1/i)).toBeInTheDocument();
    expect(screen.getByText(/ls009-B2/i)).toBeInTheDocument();
  });
});
