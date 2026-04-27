import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_list_detail_001', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nld001-one/i)).toBeInTheDocument();
    expect(screen.getByText(/nld001-two/i)).toBeInTheDocument();
    expect(screen.getByText(/nld001-three/i)).toBeInTheDocument();
  });
});
