import {render} from 'react-dom';

import Grid from '/src/components/grid';
import KeyMap from '/src/components/key-map';

import VimCheatSheet from '/src/cheatsheets/vim';

render(<VimCheatSheet />, document.getElementById('root'));
