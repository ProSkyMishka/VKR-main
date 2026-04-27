import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_014', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds014-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds014-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds014-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds014-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds014-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds014-itemC/i)).toBeInTheDocument();
  });
});
