import Grid from '/src/components/grid';
import KeyMap from '/src/components/key-map';

export const VimCheatSheet = () => (
  <Grid
    items={[
      [
        null, null, null, null, null,
        {colour: 'yellow', label: 'find word under cursor', keys: [{label: '#'}]},
        {colour: 'yellow', label: 'previous \'text\'', keys: [{label: 'n'}]},
        {colour: 'yellow', label: 'find \'text\'', keys: [{label: '?'}, {label: 'text', isInput: true}]},
        {colour: 'yellow', label: 'next \'text\'', keys: [{label: 'N'}]}
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
        {colour: 'yellow', label: 'previous \'x\'', keys: [{label: ';'}]},
        null,
        {colour: 'green', label: 'WORD', keys: [{label: 'B'}]},
        {colour: 'green', label: 'WORD', keys: [{label: 'g'}, {label: 'E'}]},
        null,
        {colour: 'green', label: 'up', keys: [{label: 'k'}]},
        null, null, null, null,
        {colour: 'yellow', label: 'previous \'x\'', keys: [{label: ';'}]}
      ],
      [
        {colour: 'blue', label: 'line', keys: [{label: '0'}]},
        {colour: 'blue', label: 'non-blank', keys: [{label: '^'}]},
        {colour: 'yellow', label: 'find \'x\'', keys: [{label: 'F'}, {label: 'x', isInput: true}]},
        {colour: 'yellow', label: 'after \'x\'', keys: [{label: 'T'}, {label: 'x', isInput: true}]},
        {colour: 'green', label: 'word', keys: [{label: 'b'}]},
        {colour: 'green', label: 'word', keys: [{label: 'g'}, {label: 'e'}]},
        {colour: 'green', label: 'left', keys: [{label: 'h'}]},
        null,
        {colour: 'green', label: 'right', keys: [{label: 'l'}]},
        {colour: 'green', label: 'word', keys: [{label: 'e'}]},
        {colour: 'green', label: 'word', keys: [{label: 'w'}]},
        {colour: 'yellow', label: 'before \'x\'', keys: [{label: 't'}, {label: 'x', isInput: true}]},
        {colour: 'yellow', label: 'find \'x\'', keys: [{label: 'f'}, {label: 'x', isInput: true}]},
        {colour: 'blue', label: 'line', keys: [{label: '$'}]}
      ],
      [
        null, null,
        {colour: 'yellow', label: 'next \'x\'', keys: [{label: ','}]},
        null, null, null, null,
        {colour: 'green', label: 'down', keys: [{label: 'j'}]},
        null,
        {colour: 'green', label: 'WORD', keys: [{label: 'E'}]},
        {colour: 'green', label: 'WORD', keys: [{label: 'W'}]},
        null,
        {colour: 'yellow', label: 'next \'x\'', keys: [{label: ';'}]},
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
        {colour: 'blue', label: 'go to line #', keys: [{label: '#', isInput: true}, {label: 'G'}]},
        null, null, null, null, null,
        {colour: 'yellow', label: 'previous \'text\'', keys: [{label: 'N'}]},
        {colour: 'yellow', label: 'find \'text\'', keys: [{label: '/'}, {label: 'text', isInput: true}]},
        {colour: 'yellow', label: 'next \'text\'', keys: [{label: 'n'}]},
        {colour: 'yellow', label: 'find word under cursor', keys: [{label: '*'}]}
      ]
    ]}
    itemComponent={KeyMap}
  />
);

export default VimCheatSheet;
