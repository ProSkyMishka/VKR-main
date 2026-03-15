import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: section_only', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
