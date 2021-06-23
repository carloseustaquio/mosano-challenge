import {ReactNodeArray} from 'react';

import {Container} from './table-style';

type Row = {
  id: string,
  data: Array<{} | ReactNodeArray>
}

type Props = {
  headers: string[],
  data: Row[],
  onRowClick: (id: string) => void;
}

export const Table = ({headers, data, onRowClick}: Props) => {
  const handleClick = (id: string, item: {} | ReactNodeArray) => {
    if (typeof item === 'string') onRowClick(id);
  };

  return (
    <Container>
      <thead>
        <tr>
          {headers.map((h) => <th key={h}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) =>
          <tr key={rowIndex}>
            {row.data.map((item, itemIndex) =>
              <td onClick={() => handleClick(row.id, item)} key={`${rowIndex}-${itemIndex}`}>{item}</td>,
            )}
          </tr>,
        )}
      </tbody>
    </Container>
  );
};
