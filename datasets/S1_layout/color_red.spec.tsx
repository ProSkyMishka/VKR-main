import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: color_red', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Red/i)).toBeInTheDocument();
  });
});
