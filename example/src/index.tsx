/* @refresh reload */
import './styles/globals.css';
import { render } from 'solid-js/web';

import App from './App';

const root = document.getElementById('root') as HTMLDivElement;
render(() => <App />, root);
