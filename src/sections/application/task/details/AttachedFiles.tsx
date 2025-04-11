import { Link } from 'react-router-dom';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';

const files = [
  {
    name: 'Overdrew_scowled.doc',
    size: '1.2Mb',
    addedBy: 'Winnie',
    icon: 'fa-file-word',
    color: 'text-primary'
  },
  { name: 'And_less_matern.ppt', size: '0.11Mb', addedBy: 'Eugene', icon: 'fa-file-powerpoint', color: 'text-danger' },
  { name: 'The_less_overslept.pdf', size: '5.9Mb', addedBy: 'Natalie', icon: 'fa-file-pdf', color: 'text-warning' },
  { name: 'Well_equitably.xlsx', size: '20.9Mb', addedBy: 'Jenny', icon: 'fa-file-excel', color: 'text-success' }
];

// ===========================|| DETAILS - ATTACHED FILES ||=========================== //

export default function AttachedFiles() {
  return (
    <MainCard title="Attached Files" bodyClassName="p-0">
      <ListGroup variant="flush">
        {files.map((file, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <Stack direction="horizontal" gap={4} className="w-100">
              <i className={`far ${file.icon} f-28 ${file.color}`} />

              <Stack className="flex-grow-1">
                <Link to="#!" className="h6 d-block mb-1">
                  {file.name}
                </Link>
                <small className="text-muted">
                  Size: {file.size} | Added by: {file.addedBy}
                </small>
              </Stack>

              <CloudDownloadTwoToneIcon className="text-secondary" />
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </MainCard>
  );
}
