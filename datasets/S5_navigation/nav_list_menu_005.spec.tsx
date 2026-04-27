import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_list_menu_005', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nlm005-one/i)).toBeInTheDocument();
    expect(screen.getByText(/nlm005-two/i)).toBeInTheDocument();
    expect(screen.getByText(/nlm005-three/i)).toBeInTheDocument();
  });
});
