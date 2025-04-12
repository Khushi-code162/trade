import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero'; // ✅ Adjust path if needed

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('HeroImage'); // ✅ Make sure this EXACT text is in your component
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'media/homeHero.png');
  });
});
