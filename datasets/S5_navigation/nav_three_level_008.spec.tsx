import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_three_level_008', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n3008-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n3008-toA/i)).toBeInTheDocument();
  });
});
