import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_detail_008', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nd008-root/i)).toBeInTheDocument();
    expect(screen.getByText(/nd008-open/i)).toBeInTheDocument();
  });
});
