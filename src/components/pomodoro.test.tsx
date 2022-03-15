import { render, screen } from '@testing-library/react';
import { Pomodoro } from './pomodoro';

it('renders play button', () => {
  render(<Pomodoro />);
  const playButton = screen.getByRole('button', { name: /Play/i });
  expect(playButton).toBeInTheDocument();
});

it('changes from play to pause on click', () => {
  render(<Pomodoro />);
  const button = screen.getByRole('button', { name: /Play/i });
  button.click();
  const pauseButton = screen.getByText(/pause/i);
  expect(pauseButton).toBeInTheDocument();
});
