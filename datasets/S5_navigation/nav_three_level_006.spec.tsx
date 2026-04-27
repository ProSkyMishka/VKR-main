import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_three_level_006', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n3006-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n3006-toA/i)).toBeInTheDocument();
  });
});
