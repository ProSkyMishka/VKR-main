import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_multi_001', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nm001-page1/i)).toBeInTheDocument();
    expect(screen.getByText(/nm001-page2/i)).toBeInTheDocument();
    expect(screen.getByText(/nm001-page3/i)).toBeInTheDocument();
  });
});
