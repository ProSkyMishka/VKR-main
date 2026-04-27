import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_detail_007', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nd007-root/i)).toBeInTheDocument();
    expect(screen.getByText(/nd007-open/i)).toBeInTheDocument();
  });
});
