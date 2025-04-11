import { RouterProvider } from 'react-router-dom';

// project-imports
import router from 'routes';
import Locales from 'components/Locales';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

function App() {
  return (
    <Locales>
      <RouterProvider router={router} />
    </Locales>
  );
}

export default App;
