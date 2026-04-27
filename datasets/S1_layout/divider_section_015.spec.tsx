import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_015', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds015-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds015-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds015-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds015-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds015-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds015-itemC/i)).toBeInTheDocument();
  });
});
