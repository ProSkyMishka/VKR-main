import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: zstack_three', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Middle/i)).toBeInTheDocument();
    expect(screen.getByText(/Top/i)).toBeInTheDocument();
  });
});
