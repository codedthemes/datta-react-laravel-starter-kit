// react-bootstrap
import Badge from 'react-bootstrap/Badge';

// ==============================|| STATUS PILL ||============================== //

export default function StatusPill({ status }: { status: string }) {
  switch (status) {
    case 'Complicated':
      return <Badge bg="light-danger">Complicated</Badge>;
    case 'Relationship':
      return <Badge bg="light-success">Relationship</Badge>;
    case 'Single':
    default:
      return <Badge bg="light-info">Single</Badge>;
  }
}
