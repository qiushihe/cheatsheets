import styled from 'styled-components';

const Base = styled.div`
  display: inline-block;
  border: 1px solid #9E9E9E;
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 12px;
  font-family: monospace;
  box-shadow: 1px 1px #9E9E9E;
  background-color: white;

  ${({isInput}) => isInput && `
    border-style: dashed;
    color: #636363;
  `}
`;

export const Key = ({label, isInput}) => (
  <Base isInput={isInput}>
    {label}
  </Base>
);

export default Key;
