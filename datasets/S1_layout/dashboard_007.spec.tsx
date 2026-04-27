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

function ancestorsOf(el: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];
  let cur: HTMLElement | null = el;
  while (cur) { out.push(cur); cur = cur.parentElement; }
  return out;
}
function findFirstByText(re: RegExp): HTMLElement | null {
  const all = Array.from(document.querySelectorAll<HTMLElement>('*'));
  for (const el of all) {
    if (el.children.length === 0 && el.textContent && re.test(el.textContent)) return el;
  }
  for (const el of all) {
    if (el.textContent && re.test(el.textContent)) return el;
  }
  return null;
}
function commonAncestorWithFlex(a: HTMLElement, b: HTMLElement, dir: 'row' | 'column'): HTMLElement | null {
  const setA = new Set(ancestorsOf(a));
  let cur: HTMLElement | null = b;
  while (cur) {
    if (setA.has(cur)) {
      // Поднимаемся вверх от общего предка, ищем flex-контейнер с нужным направлением
      let c: HTMLElement | null = cur;
      while (c) {
        const s = c.getAttribute('style') || '';
        const isFlex = /display:\s*(?:-webkit-)?flex/i.test(s);
        const rowOk = dir === 'row' && (/flex-direction:\s*row(?!-reverse)/i.test(s) || (isFlex && !/flex-direction/i.test(s)));
        const colOk = dir === 'column' && /flex-direction:\s*column/i.test(s);
        if (isFlex && (rowOk || colOk)) return c;
        c = c.parentElement;
      }
      return null;
    }
    cur = cur.parentElement;
  }
  return null;
}

describe('S1 layout: dashboard_007', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/db007-header/i)).toBeInTheDocument();
    expect(screen.getByText(/db007-metric1/i)).toBeInTheDocument();
    expect(screen.getByText(/db007-metric2/i)).toBeInTheDocument();
    expect(screen.getByText(/db007-metric3/i)).toBeInTheDocument();
    expect(screen.getByText(/db007-note/i)).toBeInTheDocument();
    expect(document.querySelector('img') || document.querySelector('svg')).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/db007-metric1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:#[EeFf][0-9a-fA-F][EeFf][0-9a-fA-F][EeFf][0-9a-fA-F]\b|rgb\(\s*2[3-5][0-9]\s*,\s*2[3-5][0-9]\s*,\s*2[3-5][0-9])/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
  });

  it('has expected layout', () => {
    render(<App />);
    {
      const a = findFirstByText(/db007-metric1/i);
      const b = findFirstByText(/db007-metric2/i);
      expect(a, "element matching /db007-metric1/i not found").not.toBeNull();
      expect(b, "element matching /db007-metric2/i not found").not.toBeNull();
      const anc = commonAncestorWithFlex(a as HTMLElement, b as HTMLElement, 'row');
      expect(anc, "metric1 and metric2 must be in the same horizontal row (HStack → flex row)").not.toBeNull();
    }
    {
      const a = findFirstByText(/db007-metric2/i);
      const b = findFirstByText(/db007-metric3/i);
      expect(a, "element matching /db007-metric2/i not found").not.toBeNull();
      expect(b, "element matching /db007-metric3/i not found").not.toBeNull();
      const anc = commonAncestorWithFlex(a as HTMLElement, b as HTMLElement, 'row');
      expect(anc, "metric2 and metric3 must be in the same horizontal row (HStack → flex row)").not.toBeNull();
    }
    {
      const a = findFirstByText(/db007-header/i);
      const b = findFirstByText(/db007-metric1/i);
      expect(a, "element matching /db007-header/i not found").not.toBeNull();
      expect(b, "element matching /db007-metric1/i not found").not.toBeNull();
      const anc = commonAncestorWithFlex(a as HTMLElement, b as HTMLElement, 'column');
      expect(anc, "header and metrics must share a vertical column (outer VStack)").not.toBeNull();
    }
    {
      const a = findFirstByText(/db007-header/i);
      const b = findFirstByText(/db007-note/i);
      expect(a, "element matching /db007-header/i not found").not.toBeNull();
      expect(b, "element matching /db007-note/i not found").not.toBeNull();
      const anc = commonAncestorWithFlex(a as HTMLElement, b as HTMLElement, 'column');
      expect(anc, "header and footer note must share a vertical column").not.toBeNull();
    }
    {
      const a = findFirstByText(/db007-metric1/i);
      const b = findFirstByText(/(?:^|\D)49(?:\D|$)/);
      expect(a, "element matching /db007-metric1/i not found").not.toBeNull();
      expect(b, "element matching /(?:^|\\D)49(?:\\D|$)/ not found").not.toBeNull();
      const anc = commonAncestorWithFlex(a as HTMLElement, b as HTMLElement, 'column');
      expect(anc, "metric1 label and value must be stacked vertically (inner VStack)").not.toBeNull();
    }
    {
      const a = findFirstByText(/db007-metric2/i);
      const b = findFirstByText(/(?:^|\D)77(?:\D|$)/);
      expect(a, "element matching /db007-metric2/i not found").not.toBeNull();
      expect(b, "element matching /(?:^|\\D)77(?:\\D|$)/ not found").not.toBeNull();
      const anc = commonAncestorWithFlex(a as HTMLElement, b as HTMLElement, 'column');
      expect(anc, "metric2 label and value must be stacked vertically (inner VStack)").not.toBeNull();
    }
    {
      const a = findFirstByText(/db007-metric3/i);
      const b = findFirstByText(/(?:^|\D)91(?:\D|$)/);
      expect(a, "element matching /db007-metric3/i not found").not.toBeNull();
      expect(b, "element matching /(?:^|\\D)91(?:\\D|$)/ not found").not.toBeNull();
      const anc = commonAncestorWithFlex(a as HTMLElement, b as HTMLElement, 'column');
      expect(anc, "metric3 label and value must be stacked vertically (inner VStack)").not.toBeNull();
    }
  });
});
