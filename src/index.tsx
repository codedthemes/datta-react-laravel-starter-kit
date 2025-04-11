import { createRoot } from 'react-dom/client';

// styles
import './index.scss';

// project-imports
import App from './App.tsx';
import { ConfigProvider } from 'contexts/ConfigContext.tsx';

// ==============================|| MAIN - REACT DOM RENDER ||============================== //

createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
