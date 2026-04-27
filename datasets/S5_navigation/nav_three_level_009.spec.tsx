import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_three_level_009', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n3009-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n3009-toA/i)).toBeInTheDocument();
  });
});
