import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: card_like', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Card Title/)).toBeInTheDocument();
    expect(screen.getByText(/Card body/)).toBeInTheDocument();
  });
});
