import * as React from 'react';
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
function ScrollToTop(props) {
  const pathname = usePage();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return <>{props.children || null}</>;
}
export default ScrollToTop;
