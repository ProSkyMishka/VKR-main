import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: text_modifiers', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Title/)).toBeInTheDocument();
    expect(screen.getByText(/Subtitle/)).toBeInTheDocument();
    expect(screen.getByText(/Box/)).toBeInTheDocument();
  });
});
