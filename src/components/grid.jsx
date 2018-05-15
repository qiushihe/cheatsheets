import {Children} from 'react';
import styled from 'styled-components';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import size from 'lodash/fp/size';
import flattenDeep from 'lodash/fp/flattenDeep';

const getMaxColumnsCount = flow([
  map(size),
  (sizes) => Math.max(...sizes)
]);

const padArray = (length, padding) => (array) => {
  if (array.length >= length) {
    return array;
  } else {
    return padArray(length, padding)([
      ...array,
      padding
    ]);
  }
};

const GridBase = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => `repeat(${columns}, 1fr)`};
`;

const GridItem = ({item}) => (
  <div>{item}</div>
);

export const Grid = ({
  items,
  itemComponent = GridItem
}) => {
  const columnsCount = getMaxColumnsCount(items);
  const ItemComponent = itemComponent;

  return (
    <GridBase columns={columnsCount}>
      {flow([
        map(padArray(columnsCount, null)),
        flattenDeep,
        map((item) => (<ItemComponent item={item} />)),
        Children.toArray
      ])(items)}
    </GridBase>
  );
}

export default Grid;
