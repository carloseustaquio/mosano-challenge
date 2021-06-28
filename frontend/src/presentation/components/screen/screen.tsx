import {ReactNodeArray} from 'react';

import {Navbar} from '#/presentation/components/navbar/navbar';
import {Footer} from '#/presentation/components/footer/footer';
import {Modal} from '#/presentation/components/modal/modal';

import {Container, Main} from './screen-styles';

type Props = {
  children: {} | ReactNodeArray
}

export const Screen = ({children}: Props) => {
  return (
    <Container data-testid="screen-container">
      <Navbar />
      <Main>
        {children}
      </Main>
      <Modal />
      <Footer />
    </Container>
  );
};
