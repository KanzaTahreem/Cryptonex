import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  beforeEach(async () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
  });

  test('should have 1 links', () => {
    const navBarLinks = screen.getByTestId('navlinks');
    expect(navBarLinks.querySelectorAll('a').length).toBe(1);
  });
});
