import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_016', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds016-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds016-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds016-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds016-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds016-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds016-itemC/i)).toBeInTheDocument();
  });
});
