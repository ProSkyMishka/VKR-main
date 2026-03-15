import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: two_columns', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Col1-A/)).toBeInTheDocument();
    expect(screen.getByText(/Col2-A/)).toBeInTheDocument();
  });
});
