// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// file data
const files = [
  { name: 'Overdrew_scowled.doc', size: '1.2Mb', addedBy: 'Winnie', icon: 'ti ti-file-word', color: 'text-primary' },
  { name: 'And_less_matern.ppt', size: '0.11Mb', addedBy: 'Eugene', icon: 'ti ti-file-type-ppt', color: 'text-danger' },
  { name: 'The_less_overslept.pdf', size: '5.9Mb', addedBy: 'Natalie', icon: 'ti ti-file-type-pdf', color: 'text-warning' },
  { name: 'Well_equitably.xlsx', size: '20.9Mb', addedBy: 'Jenny', icon: 'ti ti-file-excel', color: 'text-success' }
];

// ===========================|| DETAILS - ATTACHED FILES ||=========================== //

export default function AttachedFiles() {
  return (
    <MainCard title="Attached Files" bodyClassName="p-0">
      <ListGroup variant="flush">
        {files.map((file, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <Stack className="align-items-center" direction="horizontal" gap={1}>
              <i className={`far ${file.icon} f-28 ${file.color}`} />
              <div>
                <a href="#!">
                  <h6 className="mb-1">{file.name}</h6>
                </a>
                <small className="text-muted d-block">
                  Size: {file.size} | Added by: {file.addedBy}
                </small>
              </div>
            </Stack>
            <a href="#!" className="link-secondary" aria-label={`Download ${file.name}`}>
              <i className="ph ph-cloud-arrow-down f-16"></i>
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </MainCard>
  );
}
