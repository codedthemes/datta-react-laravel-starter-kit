// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

// project-import
import MainCard from '@/components/MainCard';

interface calendarEventsProps {
  data: {
    date: string;
    selectedToday: boolean;
    items: {
      title: string;
      time: string;
      border: string;
    }[];
  }[];
}

// =================================|| CALENDAR EVENTS CARD ||============================== //

export default function CalendarEventsCard({ data }: calendarEventsProps) {
  return (
    <MainCard
      title="Calendar"
      bodyClassName="pb-0"
      footerClassName="pt-2"
      footer={
        <div className="text-center">
          <a href="/application/calendar" rel="noopener noreferrer">
            See full calendar <i className="ti ti-chevron-compact-right"></i>
          </a>
        </div>
      }
    >
      {data.map((calenderItem, index) => (
        <div key={index}>
          <p>
            {calenderItem.date} {calenderItem.selectedToday && <Badge className="text-bg-primary">TODAY</Badge>}
          </p>
          {calenderItem.items.map((cardItem, cardIndex) => (
            <Card key={cardIndex} className="overflow-hidden mb-2">
              <Card.Body className={`px-3 py-2 border-start border-4 border-${cardItem.border}`}>
                <h6>{cardItem.title}</h6>
                <p className="mb-0">{cardItem.time}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </MainCard>
  );
}
