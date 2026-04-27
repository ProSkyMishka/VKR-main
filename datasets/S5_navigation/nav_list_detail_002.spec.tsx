import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_list_detail_002', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nld002-one/i)).toBeInTheDocument();
    expect(screen.getByText(/nld002-two/i)).toBeInTheDocument();
    expect(screen.getByText(/nld002-three/i)).toBeInTheDocument();
  });
});
