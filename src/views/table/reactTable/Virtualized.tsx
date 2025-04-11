// project-imports
import VirtualizedInfiniteScrollTable from 'sections/tables/react-table/virtualized/VirtualizedInfiniteScrollTable';
import VirtualizedRowsTable from 'sections/tables/react-table/virtualized/VirtualizedRowsTable';

// ==============================|| REACT TABLE - VIRTUALIZED  ||============================== //

export default function Virtualized() {
  return (
    <>
      <VirtualizedInfiniteScrollTable />
      <VirtualizedRowsTable />
    </>
  );
}
