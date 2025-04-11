// react-bootstrap
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { PencilSimpleLine, Eye, DownloadSimple, Printer, PaperPlaneTilt, ShareNetwork } from 'phosphor-react';

// ==============================|| ADMIN PANEL - INVOICE DETAILS ||============================== //

export default function InvoiceDetails() {
  return (
    <MainCard className="d-print-none mb-3" bodyClassName="p-3">
      <Stack direction="horizontal" className="list-inline ms-auto mb-0 justify-content-end flex-wrap">
        <Button variant="link-secondary" className="svg-wid-22">
          <PencilSimpleLine weight="duotone" />
        </Button>
        <Button variant="link-secondary" className="svg-wid-22">
          <Eye weight="duotone" />
        </Button>
        <Button variant="link-secondary" className="svg-wid-22">
          <DownloadSimple weight="duotone" />
        </Button>
        <Button variant="link-secondary" className="svg-wid-22">
          <Printer weight="duotone" />
        </Button>
        <Button variant="link-secondary" className="svg-wid-22">
          <PaperPlaneTilt weight="duotone" />
        </Button>
        <Button variant="link-secondary" className="svg-wid-22">
          <ShareNetwork weight="duotone" />
        </Button>
      </Stack>
    </MainCard>
  );
}
