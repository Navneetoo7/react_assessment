import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from '../components/Calendar';

describe('Calendar component', () => {
  test('renders month and year correctly', () => {
    render(<Calendar date={new Date(2023, 5, 1)} />);
    const monthYearText = screen.getByText('June 2023');
    expect(monthYearText).toBeInTheDocument();
  });

  test('renders days of the week', () => {
    render(<Calendar date={new Date()} />);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    daysOfWeek.forEach(day => {
      const dayElement = screen.getByText(day);
      expect(dayElement).toBeInTheDocument();
    });
  });

  test('renders the correct number of days', () => {
    render(<Calendar date={new Date(2023, 5, 1)} />);
    const days = screen.getAllByTestId('calendar-day');
    expect(days.length).toBe(30); // June 2023 has 30 days
  });

});
