import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

function findAncestorMatching(start: HTMLElement, re: RegExp): HTMLElement | null {
  let cur: HTMLElement | null = start;
  while (cur) {
    const s = cur.getAttribute('style') || '';
    if (re.test(s)) return cur;
    cur = cur.parentElement;
  }
  return null;
}

describe('S1 layout: card_block_007', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/cb007-title/i)).toBeInTheDocument();
    expect(screen.getByText(/cb007-subtitle/i)).toBeInTheDocument();
    expect(screen.getByText(/body content/i)).toBeInTheDocument();
    expect(screen.getByText(/cb007-action/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/cb007-action/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:blue|#?007AFF|rgb\(\s*0\s*,\s*122|#?0000FF|rgb\(\s*0\s*,\s*0\s*,\s*255)/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)color:\s*(?:white|#?[Ff]{3}(?:[Ff]{3})?\b|rgb\(\s*255\s*,\s*255\s*,\s*255\))/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
  });
});
