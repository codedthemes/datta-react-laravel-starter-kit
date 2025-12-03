import { useState } from 'react';

// react-bootstrap
import { ToggleButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';

// project-import
import MainCard from '@/components/MainCard';
import { ticketData } from '@/data/helpdesk';

import TicketCommonCard from './TicketCommonCard';
import TicketDetailsDrawer from './TicketDetailsDrawer';

// ==============================|| TICKET - LIST CARD ||============================== //

export default function TicketListCard() {
  const [alignment, setAlignment] = useState<number | null>(1);
  const [showBox, setShowBox] = useState(true);
  const [showAvatarStack, setShowAvatarStack] = useState(true);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const handleAlignment = (newAlignment: number | null) => {
    setAlignment(newAlignment);

    if (newAlignment === 1) {
      setShowBox(true);
      setShowAvatarStack(true);
    } else if (newAlignment === 2) {
      setShowBox(false);
      setShowAvatarStack(false);
    } else if (newAlignment === 3) {
      setShowBox(false);
      setShowAvatarStack(true);
    }
  };

  return (
    <>
      <MainCard>
        <Stack direction="horizontal" className="justify-content-between">
          <h5>Ticket List</h5>
          <ButtonGroup>
            <ToggleButton
              id="tbg-radio-2"
              type="radio"
              className="btn-sm"
              variant="outline-secondary"
              name="view"
              value={2}
              checked={alignment === 2}
              onChange={() => handleAlignment(2)}
            >
              <i className="ph ph-equals align-middle" />
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-3"
              type="radio"
              className="btn-sm"
              variant="outline-secondary"
              name="view"
              value={3}
              checked={alignment === 3}
              onChange={() => handleAlignment(3)}
            >
              <i className="ph ph-grid-nine align-middle" />
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-1"
              type="radio"
              className="btn-sm"
              variant="outline-secondary"
              name="view"
              value={1}
              checked={alignment === 1}
              onChange={() => handleAlignment(1)}
            >
              <i className="ph ph-grid-four align-middle" />
            </ToggleButton>
          </ButtonGroup>
        </Stack>
      </MainCard>
      {ticketData.map((ticket, index) => (
        <TicketCommonCard
          key={index}
          drawerOpen={handleDrawerOpen}
          chipLabel={ticket.chipLabel}
          customerName={ticket.customerName}
          ticketCount={ticket.ticketCount}
          issueTitle={ticket.issueTitle}
          likes={ticket.likes}
          addCode={ticket.addCode}
          removeCode={ticket.removeCode}
          customerAvatar={ticket.customerAvatar}
          productAvatar={ticket.productAvatar}
          productName={ticket.productName}
          supporterAvatar={ticket.supporterAvatar}
          supporterName={ticket.supporterName}
          updateTime={ticket.updateTime}
          messageCount={ticket.messageCount}
          showBox={showBox}
          showAvatarStack={showAvatarStack}
          proClass={ticket.proClass}
        />
      ))}
      <TicketDetailsDrawer isOpen={openDrawer} handleDrawerOpen={handleDrawerOpen} />
    </>
  );
}
