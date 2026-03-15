/**
 * Shared snippet for specs: use in spec files when they are copied to output project.
 * Each spec imports App from './App' and runs behavioral assertions.
 */

export const specTemplate = (body: string) => `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Behavioral tests (conversion metric)', () => {
  ${body}
});
`;
