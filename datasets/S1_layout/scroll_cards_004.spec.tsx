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

describe('S1 layout: scroll_cards_004', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/sc004-card1/i)).toBeInTheDocument();
    expect(screen.getByText(/sc004-card2/i)).toBeInTheDocument();
    expect(screen.getByText(/sc004-card3/i)).toBeInTheDocument();
    expect(screen.getByText(/sc004-card4/i)).toBeInTheDocument();
    expect(screen.getByText(/sc004-card5/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/sc004-card1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:#[EeFf][0-9a-fA-F][EeFf][0-9a-fA-F][EeFf][0-9a-fA-F]\b|rgb\(\s*2[3-5][0-9]\s*,\s*2[3-5][0-9]\s*,\s*2[3-5][0-9])/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
  });
});
