import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_three_level_011', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n3011-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n3011-toA/i)).toBeInTheDocument();
  });
});
