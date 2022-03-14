import { render, screen } from '@testing-library/react';
import { Header } from './header';

test('renders title', () => {
  const fakeTitle = 'Hi';
  render(<Header title={fakeTitle} />);
  const title = screen.getByText(new RegExp(fakeTitle));
  expect(title).toBeInTheDocument();
});
