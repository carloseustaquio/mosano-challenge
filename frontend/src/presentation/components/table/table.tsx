import {Container} from './table-style';

type Row = {
  id: string,
  data: string[]
}

type Props = {
  headers: string[],
  data: Row[],
  onRowClick: (id: string) => void;
}

export const Table = ({headers, data, onRowClick}: Props) => {
  const handleClick = (id: string) => {
    onRowClick(id);
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
          <tr onClick={() => handleClick(row.id)} key={rowIndex}>
            {row.data.map((item, itemIndex) =>
              <td key={`${rowIndex}-${itemIndex}`}>{item}</td>,
            )}
          </tr>,
        )}
      </tbody>
    </Container>
  );
};
