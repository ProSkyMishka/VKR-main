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

describe('S1 layout: profile_card_014', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/pc014-name/i)).toBeInTheDocument();
    expect(screen.getByText(/pc014-handle/i)).toBeInTheDocument();
    expect(screen.getByText(/short/i)).toBeInTheDocument();
    expect(screen.getByText(/pc014-posts/i)).toBeInTheDocument();
    expect(screen.getByText(/pc014-followers/i)).toBeInTheDocument();
    expect(screen.getByText(/pc014-likes/i)).toBeInTheDocument();
    expect(document.querySelector('img') || document.querySelector('svg')).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/pc014-handle/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)color:\s*(?:gr[ae]y|#?8E8E93|rgba?\(\s*142\s*,\s*142|#?808080|rgba?\(\s*128\s*,\s*128|rgba?\(\s*1[2-5][0-9]\s*,\s*1[2-5][0-9])/i)).not.toBeNull();
  });
});
