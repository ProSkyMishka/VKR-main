import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_stack_title_005', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nst005-home/i)).toBeInTheDocument();
    expect(screen.getByText(/nst005-go/i)).toBeInTheDocument();
  });
});
