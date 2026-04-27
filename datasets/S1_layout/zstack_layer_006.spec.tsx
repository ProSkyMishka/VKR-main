import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: zstack_layer_006', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/zl006-back/i)).toBeInTheDocument();
    expect(screen.getByText(/zl006-front/i)).toBeInTheDocument();
  });
});
