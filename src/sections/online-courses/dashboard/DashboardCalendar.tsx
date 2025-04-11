import Calendar from 'react-calendar';

export default function DashboardCalendar() {
  return (
    <Calendar
      className="p-4 border-radius-none wid-495"
      formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
      prev2Label={null}
      next2Label={null}
      prevLabel="«"
      nextLabel="»"
    />
  );
}
