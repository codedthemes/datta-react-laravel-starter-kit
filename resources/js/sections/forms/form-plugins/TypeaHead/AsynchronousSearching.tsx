import { useState } from 'react';

// third-party
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

// project-imports
import MainCard from '@/components/MainCard';

const SEARCH_URI = 'https://api.github.com/search/users';

interface Item {
  avatar_url: string;
  id: string;
  login: string;
}

interface Response {
  items: Item[];
}

// =============================|| TYPEAHEAD - ASYNCHRONOUS SEARCHING ||============================== //

export default function AsynchronousSearching() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<Item[]>([]);

  const handleSearch = (query: string) => {
    setIsLoading(true);

    fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
      .then((resp) => resp.json())
      .then(({ items }: Response) => {
        setOptions(items);
        setIsLoading(false);
      });
  };

  const filterBy = () => true;

  return (
    <MainCard title="Asynchronous Searching">
      <p>
        You can use the <b> AsyncTypeahead </b> component for asynchronous searches. It debounces user input and includes an optional query
        cache to avoid making the same request more than once in basic cases.
      </p>
      <AsyncTypeahead
        filterBy={filterBy}
        id="async-example"
        isLoading={isLoading}
        labelKey="login"
        minLength={3}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for a Github user..."
        renderMenuItemChildren={(option) => {
          const item = option as Item;
          return (
            <>
              <img
                alt={item.login}
                src={item.avatar_url}
                style={{
                  height: '24px',
                  marginRight: '10px',
                  width: '24px'
                }}
              />
              <span>{item.login}</span>
            </>
          );
        }}
      />
    </MainCard>
  );
}
