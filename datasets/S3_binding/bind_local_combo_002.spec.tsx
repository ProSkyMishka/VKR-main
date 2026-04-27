import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_local_combo_002', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /blc002-incShared/i }));
    expect(screen.getByText(/blc002-shared: 1/i)).toBeInTheDocument();
  });
});
