import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from 'components/App';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
