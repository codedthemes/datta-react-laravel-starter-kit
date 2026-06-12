import { useEffect } from 'react';

// project import
import navigation from 'menu-items';

import { usePage } from '@inertiajs/react';

const BASE_TITLE = 'Datta Able Premium React Hooks + Admin Template';

// ==============================|| USE DOCUMENT TITLE HOOK ||============================== //

export default function useDocumentTitle() {
  const location = usePage();

  const findPageTitle = (items, pathname) => {
    // Recursive function to search through all levels of navigation
    const searchRecursively = navItems => {
      for (const item of navItems) {
        // If this is an item with a URL that matches our pathname
        if (item.type === 'item' && item.url === pathname) {
          return typeof item.title === 'string' ? item.title : null;
        }

        // If this item has children, search recursively
        if (item.children && item.children.length > 0) {
          const found = searchRecursively(item.children);
          if (found) {
            return found;
          }
        }
      }
      return null;
    };

    return searchRecursively(items);
  };

  const pathname = new URL(location.url, window.location.origin).pathname;

  useEffect(() => {
    let pageTitle = 'Welcome'; // Default title for home page

    // Handle special cases
    if (pathname === '/' || pathname === '/landing') {
      pageTitle = 'Welcome';
    } else {
      // Find the page title from navigation
      const foundTitle = findPageTitle(navigation.items, pathname);
      if (foundTitle) {
        pageTitle = foundTitle;
      }
    }

    // Capitalize the first letter of each word
    const capitalizedTitle = pageTitle
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Set the document title
    document.title = `${capitalizedTitle} | ${BASE_TITLE}`;
  }, [new URL(location.url, window.location.origin).pathname]);
}
