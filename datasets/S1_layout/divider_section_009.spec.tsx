import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_009', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds009-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds009-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds009-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds009-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds009-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds009-itemC/i)).toBeInTheDocument();
  });
});
