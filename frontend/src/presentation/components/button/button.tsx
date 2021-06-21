import {useState} from 'react';
import {useTheme} from 'styled-components';

import {Container, Loader} from './button-styles';

export enum Variants {
  condensed = 'condensed',
  outlined = 'outlined',
}

type Props = {
	children: string,
	onClick: () => void | Promise<void>,
	disabled?: boolean,
	outlined?: boolean
}

export const isCondensed = (variant: Variants) => variant === Variants.condensed;

export const Button = ({children, onClick, disabled, outlined}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const variant = outlined ? Variants.outlined : Variants.condensed;

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <Container onClick={handleClick} disabled={disabled} variant={variant}>
      {isLoading ? <Loader color={isCondensed(variant) ? '#fff' : useTheme().colors.primary} /> : children}
    </Container>
  );
};
