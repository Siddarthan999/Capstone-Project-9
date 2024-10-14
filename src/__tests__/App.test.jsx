// App.test.jsx
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('renders hello world heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/HELLO WORLD/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders the project authors', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/PROJECT BY - N.SIDDARTHAN, SHAFEEQ AHAMED S/i);
  expect(paragraphElement).toBeInTheDocument();
});
