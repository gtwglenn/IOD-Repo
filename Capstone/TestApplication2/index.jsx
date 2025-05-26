import { createRoot } from 'react-dom/client';
import Sample from './Sample.jsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Could not find root element');
}

createRoot(rootElement).render(<Sample />);
