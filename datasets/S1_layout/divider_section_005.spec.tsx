import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_005', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds005-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds005-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds005-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds005-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds005-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds005-itemC/i)).toBeInTheDocument();
  });
});
