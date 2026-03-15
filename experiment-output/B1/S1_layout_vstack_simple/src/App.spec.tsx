import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: vstack_simple', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.getByText(/World/i)).toBeInTheDocument();
  });
});
