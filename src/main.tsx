import { render } from 'preact';
import { App } from './app.tsx';
import './index.scss';

const root = document.getElementById('github-repo-organizer');
if (root) {
  render(<App />, root);
}
