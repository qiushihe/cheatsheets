import styled from 'styled-components';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import isNumber from 'lodash/fp/isNumber';
import isFinite from 'lodash/fp/isFinite';
import runes from 'runes';

import Key from '/src/components/key';

const uncappedMap = map.convert({ cap: false });

const isFiniteNumber = (val) => isNumber(val) && isFinite(val);

const Base = styled.div`
  display: block;
  text-align: center;
  padding: 4px;
`;

const InnerContent = styled.div`
  display: inline-block;
  border-radius: 3px;
  box-shadow: 1px 1px #cccccc;
  padding: 4px;

  ${({colour}) => colour === 'green' && `background-color: #dcf0dd;`}
  ${({colour}) => colour === 'blue' && `background-color: #d5eafd;`}
  ${({colour}) => colour === 'yellow' && `background-color: #fffcdb;`}
`;

const Keys = styled.div`
  white-space: nowrap;

  & > * {margin: 0 2px;}
  & > :first-child {margin-left: 0;}
  & > :last-child {margin-right: 0;}
`;

const Label = styled.div`
  display: block;
  font-size: 12px;
  font-family: monospace;
  margin-top: 4px;
  padding: 0 4px;
`;

const Character = styled.span``;

const CharacterUnderCorsor = styled.span`
  color: white;
  background-color: black;
`;

export const KeyMap = ({
  item
}) => {
  if (!item) {
    return (
      <div>&nbsp;</div>
    );
  } else {
    const {label, keys, cursor, colour} = item;
    return (
      <Base>
        <InnerContent colour={colour}>
          <Keys>
            {map(({label: keyLabel, isInput}) => (
              <Key label={keyLabel} isInput={isInput} />
            ))(keys)}
          </Keys>
          <Label>
            {isFiniteNumber(cursor) ? (
              flow([
                runes,
                uncappedMap((char, index) => {
                  const Komponent = index === cursor
                    ? CharacterUnderCorsor
                    : Character;

                  return (
                    <Komponent>{char}</Komponent>
                  );
                })
              ])(label)
            ) : label}
          </Label>
        </InnerContent>
      </Base>
    );

  }
};

export default KeyMap;
