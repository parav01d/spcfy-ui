import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './LoginPage';

test('renders Bioinformatic Headline', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bioinformatic/i);
  expect(linkElement).toBeInTheDocument();
});
