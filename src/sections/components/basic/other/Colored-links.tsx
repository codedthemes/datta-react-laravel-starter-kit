import { Link } from 'react-router-dom';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

//==============================|| OTHER - COLORED LINKS ||============================== //

export default function ColoredLinks() {
  return (
    <MainCard
      title={
        <>
          Colored links <Badge bg="danger">NEW</Badge>
        </>
      }
      subheader={
        <p className="mb-0">
          You can use the <code>.link-* </code> classes to colorize links. These classes have a <code>:hover</code> and
          <code> :focus</code> state.
        </p>
      }
    >
      <Stack direction="horizontal" gap={3} className="flex-wrap">
        <Link to="#" className="text-primary">
          Primary link
        </Link>
        <Link to="#" className="text-secondary">
          Secondary link
        </Link>
        <Link to="#" className="text-success">
          Success link
        </Link>
        <Link to="#" className="text-danger">
          Danger link
        </Link>
        <Link to="#" className="text-warning">
          Warning link
        </Link>
        <Link to="#" className="text-info">
          Info link
        </Link>
        <div className="bg-white px-3 py-2 d-inline-block rounded">
          <Link to="#" className="text-dark">
            Dark link
          </Link>
        </div>
        <div className="bg-dark px-3 py-2 d-inline-block rounded">
          <Link to="#" className="text-light">
            Light link
          </Link>
        </div>
      </Stack>
    </MainCard>
  );
}
