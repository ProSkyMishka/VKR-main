import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_two_level_001', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n2001-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n2001-enter/i)).toBeInTheDocument();
  });
});
