import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: hstack_two', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Left/)).toBeInTheDocument();
    expect(screen.getByText(/Right/)).toBeInTheDocument();
  });
});
