import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: text_center', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Centered/)).toBeInTheDocument();
  });
});
