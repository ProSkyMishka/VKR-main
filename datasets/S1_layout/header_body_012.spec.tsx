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

describe('S1 layout: header_body_012', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/hb012-headline/i)).toBeInTheDocument();
    expect(screen.getByText(/hb012-tagline/i)).toBeInTheDocument();
    expect(screen.getByText(/content paragraph/i)).toBeInTheDocument();
    expect(screen.getByText(/hb012-footer/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/hb012-headline/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:#[EeFf][0-9a-fA-F][EeFf][0-9a-fA-F][EeFf][0-9a-fA-F]\b|rgb\(\s*2[3-5][0-9]\s*,\s*2[3-5][0-9]\s*,\s*2[3-5][0-9])/i)).not.toBeNull();
  });
});
