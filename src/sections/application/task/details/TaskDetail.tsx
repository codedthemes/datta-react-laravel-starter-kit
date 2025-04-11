// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import Rotate90DegreesCcwTwoToneIcon from '@mui/icons-material/Rotate90DegreesCcwTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SettingsInputHdmiTwoToneIcon from '@mui/icons-material/SettingsInputHdmiTwoTone';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';

const detailData = [
  {
    icon: LibraryBooksTwoToneIcon,
    label: 'Project',
    value: (
      <a className="link-secondary" href="#!">
        Singular app
      </a>
    )
  },
  { icon: HomeWorkTwoToneIcon, label: 'Updated', value: '12 May, 2020' },
  { icon: CreateTwoToneIcon, label: 'Created', value: '25 Feb, 2019' },
  {
    icon: EmojiFlagsTwoToneIcon,
    label: 'Priority',
    value: (
      <>
        <ArrowCircleUpTwoToneIcon className="w-20" /> Highest
      </>
    )
  },
  { icon: Rotate90DegreesCcwTwoToneIcon, label: 'Revisions', value: '29' },
  { icon: AccountCircleTwoToneIcon, label: 'Added by', value: 'Winnie' },
  { icon: SettingsInputHdmiTwoToneIcon, label: 'Status', value: 'Published' }
];

// ===========================|| DETAILS - TASK DETAILS ||=========================== //

export default function TaskDetail() {
  return (
    <MainCard title="Task Details" bodyClassName="p-0">
      <ListGroup variant="flush">
        {detailData.map((item, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between">
            <Stack direction="horizontal" gap={1} className="h6 m-0">
              <item.icon className="w-20 text-primary" />
              {item.label} :
            </Stack>
            <div>{item.value}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </MainCard>
  );
}
