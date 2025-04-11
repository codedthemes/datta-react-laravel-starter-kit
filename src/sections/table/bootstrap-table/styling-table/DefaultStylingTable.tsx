// react-bootstrap
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| STYLING TABLE - DEFAULT STYLING TABLE ||============================== //

export default function DefaultStylingTable() {
  return (
    <MainCard title="Default Styling" subheader={<p className="mb-0">This is default table style</p>}>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </MainCard>
  );
}
