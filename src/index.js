import { createRoot } from 'react-dom/client';
import { Routings } from './routes/Routings';
import { MyProvider } from './context/MyProvider';

const root = createRoot(document.getElementById('root'));
root.render( <MyProvider> <Routings /> </MyProvider> );