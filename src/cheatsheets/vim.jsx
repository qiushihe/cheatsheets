import Grid from '/src/components/grid';
import KeyMap from '/src/components/key-map';

export const VimCheatSheet = () => (
  <Grid
    items={[
      [
        null, null, null, null,
        {colour: 'green', label: '🔍 word', cursor: 3, keys: [{label: '#'}]},
        null,
        {colour: 'yellow', label: '⇱ \'text\'', keys: [{label: 'n'}]},
        {colour: 'yellow', label: '🔍 \'text\'', keys: [{label: '?'}, {label: 'text', isInput: true}]},
        {colour: 'yellow', label: '⇲ \'text\'', keys: [{label: 'N'}]}
      ],
      [
        {colour: 'blue', label: 'first line', keys: [{label: 'g'}, {label: 'g'}]},
        null, null, null, null,
        {colour: 'blue', label: 'page', keys: [{label: '^b'}]},
        {colour: 'blue', label: '½ page', keys: [{label: '^u'}]},
        {colour: 'blue', label: 'screen', keys: [{label: 'H'}]},
        {colour: 'blue', label: 'paragraph', keys: [{label: '{'}]},
        {colour: 'blue', label: 'sentence', keys: [{label: '('}]}
      ],
      [
        null, null,
        {colour: 'yellow', label: '⇤ \'x\'', keys: [{label: ';'}]},
        null,
        {colour: 'green', label: 'WORD', cursor: 0, keys: [{label: 'B'}]},
        {colour: 'green', label: '·· WORD', cursor: 1, keys: [{label: 'g'}, {label: 'E'}]},
        null,
        {colour: 'green', label: 'up', keys: [{label: 'k'}]},
        null, null, null, null,
        {colour: 'yellow', label: '⇤ \'x\'', keys: [{label: ','}]}
      ],
      [
        {colour: 'blue', label: 'line', cursor: 0, keys: [{label: '0'}]},
        {colour: 'blue', label: '__!blank', cursor: 2, keys: [{label: '^'}]},
        {colour: 'yellow', label: '🔍 \'x\'', keys: [{label: 'F'}, {label: 'x', isInput: true}]},
        {colour: 'yellow', label: '··x··', cursor: 3, keys: [{label: 'T'}, {label: 'x', isInput: true}]},
        {colour: 'green', label: 'word', cursor: 0, keys: [{label: 'b'}]},
        {colour: 'green', label: '·· word', cursor: 1, keys: [{label: 'g'}, {label: 'e'}]},
        {colour: 'green', label: 'left', keys: [{label: 'h'}]},
        null,
        {colour: 'green', label: 'right', keys: [{label: 'l'}]},
        {colour: 'green', label: 'word', cursor: 3, keys: [{label: 'e'}]},
        {colour: 'green', label: 'word ··', cursor: 5, keys: [{label: 'w'}]},
        {colour: 'yellow', label: '··x··', cursor: 1, keys: [{label: 't'}, {label: 'x', isInput: true}]},
        {colour: 'yellow', label: '🔍 \'x\'', keys: [{label: 'f'}, {label: 'x', isInput: true}]},
        {colour: 'blue', label: 'line', cursor: 3, keys: [{label: '$'}]}
      ],
      [
        null, null,
        {colour: 'yellow', label: '⇥ \'x\'', keys: [{label: ','}]},
        null, null, null, null,
        {colour: 'green', label: 'down', keys: [{label: 'j'}]},
        null,
        {colour: 'green', label: 'WORD', cursor: 3, keys: [{label: 'E'}]},
        {colour: 'green', label: 'WORD ··', cursor: 5, keys: [{label: 'W'}]},
        null,
        {colour: 'yellow', label: '⇥ \'x\'', keys: [{label: ';'}]},
      ],
      [
        {colour: 'blue', label: 'last line', keys: [{label: 'G'}]},
        null, null, null, null,
        {colour: 'blue', label: '½ page', keys: [{label: '^d'}]},
        {colour: 'blue', label: 'page', keys: [{label: '^f'}]},
        {colour: 'blue', label: 'screen', keys: [{label: 'L'}]},
        {colour: 'blue', label: 'sentence', keys: [{label: ')'}]},
        {colour: 'blue', label: 'paragraph', keys: [{label: '}'}]},
      ],
      [
        {colour: 'yellow', label: 'go to line #', keys: [{label: '#', isInput: true}, {label: 'G'}]},
        null, null, null, null, null,
        {colour: 'yellow', label: '⇱ \'text\'', keys: [{label: 'N'}]},
        {colour: 'yellow', label: '🔍 \'text\'', keys: [{label: '/'}, {label: 'text', isInput: true}]},
        {colour: 'yellow', label: '⇲ \'text\'', keys: [{label: 'n'}]},
        null,
        {colour: 'green', label: '🔍 word', cursor: 3, keys: [{label: '*'}]}
      ]
    ]}
    itemComponent={KeyMap}
  />
);

export default VimCheatSheet;
