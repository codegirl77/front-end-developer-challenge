import React from 'react';
import { render, screen } from '@testing-library/react';
import RuneMasteryLoadoutTalentCalculator from './RuneMasteryLoadoutTalentCalculator';
import {
  talentPathOneName,
  talentPathTwoName
}
from './iconArrayGeneration';

test('Header Text Loads', () => {
  render(<RuneMasteryLoadoutTalentCalculator />);
  const linkElement = screen.getByText('TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000');
  expect(linkElement).toBeInTheDocument();
});

test('Talent Path One Name Loads', () => {
  render(<RuneMasteryLoadoutTalentCalculator />);
  const linkElement = screen.getByText(talentPathOneName);
  expect(linkElement).toBeInTheDocument();
});

test('Talent Path Two Name Loads', () => {
  render(<RuneMasteryLoadoutTalentCalculator />);
  const linkElement = screen.getByText(talentPathTwoName);
  expect(linkElement).toBeInTheDocument();
});

test('Talent Path Icons Load', () => {
  render(<RuneMasteryLoadoutTalentCalculator />);
  const icons = screen.getAllByRole('img');
        icons.forEach(icon => expect(icon).toBeInTheDocument())
});
