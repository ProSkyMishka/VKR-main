import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: frame_square', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Box/i)).toBeInTheDocument();
  });
  it('centers text in frame (SwiftUI .frame default)', () => {
    render(<App />);
    const el = screen.getByText(/Box/i);
    const parent = el.parentElement;
    expect(parent).toBeTruthy();
    const style = (parent.getAttribute('style') || '').toLowerCase();
    expect(style).toMatch(/display.*flex/);
    expect(style).toMatch(/alignitems.*center/);
    expect(style).toMatch(/justifycontent.*center/);
  });
});
