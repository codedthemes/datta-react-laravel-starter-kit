import { ReactNode } from 'react';

interface ScrollXProps {
  children: ReactNode;
}

// ==============================|| SCROLL X ||============================== //

export default function ScrollX({ children }: ScrollXProps): JSX.Element {
  return <div className="w-100 overflow-auto d-block">{children}</div>;
}
