import styled from 'styled-components';
import map from 'lodash/fp/map';

import Key from '/src/components/key';

const Base = styled.div`
  display: block;
  text-align: center;
  padding: 4px;
`;

const InnerContent = styled.div`
  display: inline-block;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px #cccccc;
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
  font-family: sans-serif;
  margin-top: 4px;
`;

export const KeyMap = ({
  item
}) => {
  if (!item) {
    return (
      <div>&nbsp;</div>
    );
  } else {
    const {label, keys, colour} = item;
    return (
      <Base>
        <InnerContent colour={colour}>
          <Keys>
            {map(({label, isInput}) => (
              <Key label={label} isInput={isInput} />
            ))(keys)}
          </Keys>
          <Label>{label}</Label>
        </InnerContent>
      </Base>
    );

  }
};

export default KeyMap;
