import { render } from 'react-dom';
import { CssBaseline } from '@mui/material';
import App from './containers/App';

render(
  <CssBaseline>
    <App />
  </CssBaseline>,
  document.getElementById('root')
);
