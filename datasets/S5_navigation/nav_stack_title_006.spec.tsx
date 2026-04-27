import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_stack_title_006', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nst006-home/i)).toBeInTheDocument();
    expect(screen.getByText(/nst006-go/i)).toBeInTheDocument();
  });
});
