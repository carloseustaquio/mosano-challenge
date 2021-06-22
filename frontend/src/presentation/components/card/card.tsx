import {ReactNodeArray} from 'react';

import {Container} from './card-styles';

type Props = {
	children: {} | ReactNodeArray
}

export const Card = ({children}: Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
