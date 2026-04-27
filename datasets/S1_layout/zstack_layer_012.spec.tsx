import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: zstack_layer_012', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/zl012-back/i)).toBeInTheDocument();
    expect(screen.getByText(/zl012-front/i)).toBeInTheDocument();
  });
});
