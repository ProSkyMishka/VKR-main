import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: centered_box', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/Center/i)).toBeInTheDocument();
  });
  it('keeps content box sized by content (VStack alignItems)', () => {
    render(<App />);
    const el = screen.getByText(/Center/i);
    // Walk up the DOM to find any ancestor with alignItems / align-items: center
    let node: HTMLElement | null = el as HTMLElement;
    let found = false;
    while (node) {
      const s = (node.getAttribute?.('style') || '').toLowerCase();
      if ((s.includes('alignitems') || s.includes('align-items')) && s.includes('center')) { found = true; break; }
      node = node.parentElement;
    }
    expect(found).toBe(true);
  });
});
