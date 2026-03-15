import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: icon_and_label', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Favorite/)).toBeInTheDocument();
  });
});
