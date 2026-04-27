import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_detail_012', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nd012-root/i)).toBeInTheDocument();
    expect(screen.getByText(/nd012-open/i)).toBeInTheDocument();
  });
});
