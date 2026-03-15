#!/usr/bin/env node
/**
 * Генерирует .spec.tsx для всех примеров в datasets/ по сценарию и имени файла.
 * Запуск: node scripts/generate-specs.js
 * Ожидания (тексты/кнопки) заданы в EXPECTATIONS.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', 'datasets');

const EXPECTATIONS = {
  S1_layout: {
    vstack_simple: { texts: ['Hello', 'World'] },
    hstack_spacing: { texts: ['Left', 'Center', 'Right'] },
    zstack_overlay: { texts: ['Overlay'] },
    text_modifiers: { texts: ['Title', 'Subtitle', 'Box'] },
    image_layout: { texts: ['Caption'], hasImage: true },
    nested_stacks: { texts: ['A', 'B', 'C', 'D'] },
    vstack_gap_8: { texts: ['A', 'B', 'C'] },
    vstack_gap_24: { texts: ['Line 1', 'Line 2'] },
    hstack_two: { texts: ['Left', 'Right'] },
    hstack_four: { texts: ['1', '2', '3', '4'] },
    zstack_three: { texts: ['Middle', 'Top'] },
    color_red: { texts: ['Red'] },
    color_green: { texts: ['Green'] },
    text_center: { texts: ['Centered'] },
    text_caption: { texts: ['Title', 'Caption'] },
    frame_square: { texts: ['Box'], checkFrameCenter: true },
    padding_sides: { texts: ['Padded'] },
    vstack_five_lines: { texts: ['One', 'Two', 'Three', 'Four', 'Five'] },
    hstack_colors: { texts: ['R', 'G', 'B'] },
    card_like: { texts: ['Card Title', 'Card body'] },
    icon_and_label: { texts: ['Favorite'] },
    two_columns: { texts: ['Col1-A', 'Col2-A'] },
    centered_box: { texts: ['Center'], checkContentSized: true },
  },
  S2_state_events: {
    counter: { initial: /Count: 0/, button: /Increment/i, after: /Count: 1/ },
    toggle_switch: { initial: /Off/, role: 'checkbox', after: /On/ },
    button_actions: { initial: /Tap a button/, button: /Action A/i, after: /A/ },
    on_appear: { texts: ['Loaded', 'Loading'] },
    multiple_state: { button: /Update/i, after: /a: 1/ },
    stepper_count: { texts: ['Step'], after: /0|1/ },
    dual_buttons: { button: /\+/, after: /1/ },
    reset_button: { button: /Reset/i, texts: ['0'] },
    toggle_label: { role: 'checkbox' },
    two_toggles: { texts: ['A', 'B'] },
    button_style: { button: /Tap|Done/i },
    counter_with_limit: { button: /\+1/i },
    loading_state: { texts: ['Loading', 'Ready'] },
    init_state: { button: /Double/i },
    string_state: { button: /Change/i, after: /Swift/ },
    bool_flip: { button: /Toggle/i },
    step_up_down: { texts: ['−', '+'] },
    message_on_tap: { button: /Say Hi/i, after: /Hi!/ },
    on_appear_set: { texts: ['42'] },
    three_counters: { button: /A\+/i },
  },
  S3_binding: {
    child_toggle: { initial: /Parent: Off/, role: 'checkbox', after: /Parent: On/ },
    binding_text: { texts: ['Hello'] },
    two_way: { texts: ['%.1f'] },
    child_count: { button: /Child \+1/i },
    child_bool: { role: 'checkbox' },
    parent_child_text: { texts: ['You wrote'] },
    nested_binding: { button: /Inner/i },
    two_bindings: { texts: ['A', 'B'] },
    binding_int: { texts: ['N'] },
    binding_double: { texts: ['0.'] },
    optional_binding: { texts: ['Edit me', 'Length'] },
    switch_binding: { role: 'checkbox', after: /On/ },
    read_write_child: { button: /\+/i },
    three_way: { texts: ['a=', 'b='] },
    checkbox_parent: { role: 'checkbox' },
  },
  S4_list_foreach: {
    simple_list: { texts: ['Apple', 'Banana', 'Cherry'] },
    foreach_range: { texts: ['Item 0', 'Item 1'] },
    list_with_sections: { texts: ['Section A', 'Section B'] },
    foreach_buttons: { texts: ['Selected'] },
    list_three: { texts: ['X', 'Y', 'Z'] },
    foreach_ten: { texts: ['Item 0', 'Item 9'] },
    list_with_ids: { texts: ['A', 'B'] },
    foreach_buttons_list: { texts: ['First', 'Second'] },
    section_only: { texts: ['Main'] },
    two_sections: { texts: ['A1', 'B1'] },
    foreach_index_offset: { texts: ['Row 1'] },
    list_strings: { texts: ['Apple', 'Date'] },
    foreach_with_view: { texts: ['One', 'Three'] },
    list_five: { texts: ['1', '5'] },
    section_footer: { texts: ['Header', 'Footer'] },
    foreach_identifiable: { texts: ['A', 'B'] },
    list_empty_state: { texts: [] },
    foreach_nested: { texts: ['a', 'c'] },
    list_static_three: { texts: ['Alpha', 'Gamma'] },
    foreach_range_large: { texts: ['Item 0', 'Item 19'] },
  },
  S5_navigation: {
    nav_root: { texts: ['Root'] },
    nav_link: { role: 'link', name: /Go to Detail/i, after: /Detail/ },
    nav_multiple: { texts: ['Page A', 'Page B'] },
    nav_list: { texts: ['List'] },
    nav_vstack: { texts: ['Root screen'] },
    link_detail: { role: 'link', after: /Detail/ },
    nav_three_links: { texts: ['One', 'Two', 'Three'] },
    nav_title_large: { texts: ['Content'] },
    nav_inline: { texts: ['Inline'] },
    stack_nav: { texts: ['Stack'] },
    link_with_label: { role: 'link', name: /Go/i },
    nav_empty: { texts: ['Empty nav'] },
    nav_buttons: { texts: ['First', 'Second'] },
    nav_list_links: { texts: ['Items'] },
    stack_link: { role: 'link', name: /Next/i },
  },
  S6_animations: {
    opacity_animation: { texts: ['Fade'], button: /Toggle/i },
    scale_animation: { texts: ['Scale'], button: /Toggle/i },
    with_animation: { texts: ['Slide'], button: /Move/i },
    transition_simple: { button: /Toggle/i },
    fade_in: { button: /Toggle/i },
    scale_toggle: { button: /Toggle/i },
    slide_x: { button: /Move/i },
    with_anim_ease: { button: /Animate/i },
    opacity_bool: { button: /Hide\/Show/i },
    offset_y: { button: /Drop/i },
    transition_opacity: { button: /Toggle/i },
    spring_anim: { button: /Bounce/i },
    duration_anim: { button: /Change/i },
    combined_anim: { button: /Toggle/i },
    conditional_anim: { button: /Toggle/i },
  },
};

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Регекс для текста: нечувствительность к регистру (LLM часто меняет Center → center). */
function textPattern(t) {
  return `/${escapeRegex(t)}/i`;
}

function genS1(name, spec) {
  const lines = [];
  if (spec.texts?.length) {
    lines.push(`it('shows expected text', () => {`);
    lines.push(`  render(<App />);`);
    spec.texts.forEach((t) => {
      lines.push(`  expect(screen.getByText(${textPattern(t)})).toBeInTheDocument();`);
    });
    if (spec.hasImage) lines.push(`  expect(document.querySelector('img')).toBeInTheDocument();`);
    lines.push(`});`);
  }
  if (spec.checkFrameCenter) {
    lines.push(`it('centers text in frame (SwiftUI .frame default)', () => {`);
    lines.push(`  render(<App />);`);
    lines.push(`  const el = screen.getByText(/Box/i);`);
    lines.push(`  const parent = el.parentElement;`);
    lines.push(`  expect(parent).toBeTruthy();`);
    lines.push(`  const style = (parent.getAttribute('style') || '').toLowerCase();`);
    lines.push(`  expect(style).toMatch(/display.*flex/);`);
    lines.push(`  expect(style).toMatch(/alignitems.*center/);`);
    lines.push(`  expect(style).toMatch(/justifycontent.*center/);`);
    lines.push(`});`);
  }
  if (spec.checkContentSized) {
    lines.push(`it('keeps content box sized by content (VStack alignItems)', () => {`);
    lines.push(`  render(<App />);`);
    lines.push(`  const el = screen.getByText(/Center/i);`);
    lines.push(`  const withStyle = el.closest('[style*="alignItems"]') || el.closest('[style*="padding"]');`);
    lines.push(`  expect(withStyle).toBeTruthy();`);
    lines.push(`  const s = (withStyle.getAttribute('style') || '').toLowerCase();`);
    lines.push(`  expect(s).toMatch(/alignitems.*center/);`);
    lines.push(`});`);
  }
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S1 layout: ${name}', () => {
  ${lines.join('\n  ')}
});
`;
}

function genS2(name, spec) {
  const lines = [];
  if (spec.button && spec.after) {
    lines.push(`it('updates state on action', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: ${spec.button} }));
  expect(screen.getByText(${spec.after})).toBeInTheDocument();
});`);
  } else if (spec.role === 'checkbox' && spec.after) {
    lines.push(`it('toggles and updates', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByText(${spec.after})).toBeInTheDocument();
});`);
  } else if (spec.texts?.length) {
    lines.push(`it('shows content', () => {
  render(<App />);
  ${spec.texts.map((t) => `expect(screen.getByText(${textPattern(t)})).toBeInTheDocument();`).join('\n  ')}
});`);
  } else {
    lines.push(`it('renders and has interactive elements', () => {
  render(<App />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});`);
  }
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: ${name}', () => {
  ${lines.join('\n  ')}
});
`;
}

function genS3(name, spec) {
  const hasCheckbox = spec.role === 'checkbox';
  const lines = [];
  if (spec.initial && spec.after) {
    lines.push(`it('binding updates parent', async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getByText(${spec.initial})).toBeInTheDocument();
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByText(${spec.after})).toBeInTheDocument();
});`);
  } else if (spec.button) {
    lines.push(`it('child action updates parent', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: ${spec.button} }));
  expect(screen.getByText(/\\\\d+/)).toBeInTheDocument();
});`);
  } else {
    lines.push(`it('renders with binding', () => {
  render(<App />);
  expect(document.body.textContent).toBeTruthy();
});`);
  }
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: ${name}', () => {
  ${lines.join('\n  ')}
});
`;
}

function genS4(name, spec) {
  const texts = spec.texts || [];
  const lines = [];
  lines.push(`it('shows list content', () => {`);
  lines.push(`  render(<App />);`);
  texts.slice(0, 5).forEach((t) => {
    lines.push(`  expect(screen.getByText(${textPattern(t)})).toBeInTheDocument();`);
  });
  if (texts.length === 0) lines.push(`  expect(document.querySelector('ul') || document.body).toBeTruthy();`);
  lines.push(`});`);
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: ${name}', () => {
  ${lines.join('\n  ')}
});
`;
}

function genS5(name, spec) {
  const lines = [];
  if (spec.role === 'link' && spec.after) {
    lines.push(`it('navigates on link click', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('link', { name: ${spec.name || '/.*/'} }));
  expect(screen.getByText(${spec.after})).toBeInTheDocument();
});`);
  } else if (spec.texts?.length) {
    lines.push(`it('shows nav content', () => {
  render(<App />);
  ${spec.texts.slice(0, 3).map((t) => `expect(screen.getByText(${textPattern(t)})).toBeInTheDocument();`).join('\n  ')}
});`);
  } else {
    lines.push(`it('renders navigation', () => { render(<App />); expect(document.body.textContent).toBeTruthy(); });`);
  }
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S5 navigation: ${name}', () => {
  ${lines.join('\n  ')}
});
`;
}

function genS6(name, spec) {
  const lines = [];
  lines.push(`it('has toggle and content', async () => {
  const user = userEvent.setup();
  render(<App />);
  ${spec.texts?.length ? `expect(screen.getByText(${textPattern(spec.texts[0])})).toBeInTheDocument();` : ''}
  await user.click(screen.getByRole('button', { name: ${spec.button || '/Toggle|Move|Animate|Change|Drop|Bounce/i'} }));
  expect(document.body.textContent).toBeTruthy();
});`);
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: ${name}', () => {
  ${lines.join('\n  ')}
});
`;
}

const generators = { S1_layout: genS1, S2_state_events: genS2, S3_binding: genS3, S4_list_foreach: genS4, S5_navigation: genS5, S6_animations: genS6 };

const dirs = ['S1_layout', 'S2_state_events', 'S3_binding', 'S4_list_foreach', 'S5_navigation', 'S6_animations'];

dirs.forEach((dir) => {
  const scenario = dir;
  const gen = generators[scenario];
  const dirPath = path.join(ROOT, dir);
  const expectations = EXPECTATIONS[scenario] || {};
  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.swift'));
  files.forEach((f) => {
    const base = f.replace(/\.swift$/, '');
    const spec = expectations[base] || { texts: [] };
    const content = gen(base, spec);
    const specPath = path.join(dirPath, base + '.spec.tsx');
    fs.writeFileSync(specPath, content);
    console.log('Wrote', specPath);
  });
});

console.log('Done.');
