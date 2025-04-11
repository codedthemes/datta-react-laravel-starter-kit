// react-bootstrap
import MainCard from 'components/MainCard';
import CalendarComponent from 'sections/application/calendar/Calendar';

// ==============================|| APPLICATION - CALENDAR ||============================== //

export default function CalendarPage() {
  return (
    <MainCard title={false}>
      <CalendarComponent />
    </MainCard>
  );
}
