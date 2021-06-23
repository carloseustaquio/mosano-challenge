import {ReactNodeArray} from 'react';

import {Container} from './card-styles';

type Props = {
  children: {} | ReactNodeArray
}

export const Card = ({children, ...props}: Props) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};
