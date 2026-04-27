import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_stack_title_012', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nst012-home/i)).toBeInTheDocument();
    expect(screen.getByText(/nst012-go/i)).toBeInTheDocument();
  });
});
