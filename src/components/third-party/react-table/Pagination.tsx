// react-bootstrap
import Pagination from 'react-bootstrap/Pagination';
import Stack from 'react-bootstrap/Stack';

// third-party
import { TableState, Updater } from '@tanstack/react-table';

interface TablePaginationProps {
  setPageSize: (updater: Updater<number>) => void;
  setPageIndex: (updater: Updater<number>) => void;
  getState: () => TableState;
  getPageCount: () => number;
  initialPageSize?: number;
  totalEntries: number;
  className?: string;
}

// ==============================|| REACT TABLE - PAGINATION ||============================== //

export default function TablePagination({
  getPageCount,
  setPageIndex,
  getState,
  totalEntries,
  initialPageSize,
  className
}: TablePaginationProps) {
  const state = getState();
  const pageIndex = state.pagination?.pageIndex ?? 0;
  const pageSize = state.pagination?.pageSize ?? initialPageSize ?? 10;

  const indexOfFirstUser = pageIndex * pageSize + 1;
  const indexOfLastUser = Math.min(indexOfFirstUser + pageSize - 1, totalEntries);
  const totalPages = getPageCount();

  return (
    <Stack direction="horizontal" className={`justify-content-between align-items-center pt-4 ${className}`}>
      <p className="mb-0">
        Showing {indexOfFirstUser} to {indexOfLastUser} of {totalEntries} entries
      </p>
      <Pagination className="custom-pagination justify-content-md-end justify-content-start mb-0">
        <Pagination.Prev
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={pageIndex === 1}
          className={`custom-prev-arrow`}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item key={index} active={index === pageIndex} onClick={() => setPageIndex(index)} bsPrefix="bg-secondary-1">
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          bsPrefix="bg-secondary"
          onClick={() => setPageIndex((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={pageIndex + 1 === totalPages}
          className={`custom-next-arrow`}
        />
      </Pagination>
    </Stack>
  );
}
