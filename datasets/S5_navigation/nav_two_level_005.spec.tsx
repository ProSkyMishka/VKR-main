import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_two_level_005', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n2005-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n2005-enter/i)).toBeInTheDocument();
  });
});
