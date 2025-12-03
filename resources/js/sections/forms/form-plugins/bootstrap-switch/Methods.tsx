import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// third-party
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| BOOTSTRAP SWITCH - METHODS ||============================== //

export default function Methods() {
  const [isChecked, setIsChecked] = useState(false);

  const handleInitialize = () => {
    setIsChecked(false);
  };

  const handleDestroy = () => {
    setIsChecked(false);
  };

  const handleOn = () => setIsChecked(true);
  const handleOff = () => setIsChecked(false);
  const handleToggle = () => setIsChecked((prev) => !prev);

  const actions = [
    { method: 'initialize', handler: handleInitialize, label: 'Initialize', desc: 'Initializes the switch-button with options' },
    { method: 'destroy', handler: handleDestroy, label: 'Destroy', desc: 'Destroys the switch-button (disable + reset)' },
    { method: 'on', handler: handleOn, label: 'On', desc: "Sets the switch-button to 'On' state" },
    { method: 'off', handler: handleOff, label: 'Off', desc: "Sets the switch-button to 'Off' state" },
    { method: 'toggle', handler: handleToggle, label: 'Toggle', desc: 'Toggles the state of the switch-button' }
  ];

  return (
    <MainCard
      title="Methods"
      subheader="Methods can be used to control a switch button directly."
      secondary={<BootstrapSwitchButton onlabel="On" offlabel="Off" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />}
      className="table-card"
    >
      <Table responsive className="switch-table mb-0">
        <thead>
          <tr>
            <th>Method</th>
            <th>Demo</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {actions.map(({ method, handler, label, desc }) => (
            <tr key={method}>
              <td>
                <em>{method}</em>
              </td>
              <td>
                <Button variant="outline-secondary" size="sm" onClick={handler}>
                  {label}
                </Button>
              </td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}
