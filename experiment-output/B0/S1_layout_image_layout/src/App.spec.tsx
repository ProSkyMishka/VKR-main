import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: image_layout', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Caption/i)).toBeInTheDocument();
    expect(document.querySelector('img')).toBeInTheDocument();
  });
});
