import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_two_level_008', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n2008-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n2008-enter/i)).toBeInTheDocument();
  });
});
