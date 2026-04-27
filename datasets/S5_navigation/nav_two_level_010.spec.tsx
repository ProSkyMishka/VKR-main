import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_two_level_010', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/n2010-root/i)).toBeInTheDocument();
    expect(screen.getByText(/n2010-enter/i)).toBeInTheDocument();
  });
});
