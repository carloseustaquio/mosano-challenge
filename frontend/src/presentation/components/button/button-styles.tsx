import styled from 'styled-components';
import {BeatLoader} from 'react-spinners';

import {isCondensed, Variants} from './button';

export const Container = styled.button<{variant: Variants}>`
	cursor: pointer;
	outline: none;
	color: ${({theme, variant}) => isCondensed(variant) ? '#fff' : theme.colors.primary};
	background: ${({theme, variant}) => isCondensed(variant) ? theme.colors.primary : 'transparent'};
	border: ${({theme, variant}) => isCondensed(variant) ? 'none' : 'solid 3px' + theme.colors.primary};
	border-radius: 4px;
	padding: ${({variant}) => isCondensed(variant) ? '8px 32px' : '5px 32px'};
	text-transform: uppercase;
	font-size: 16px;
  font-family: 'Poppins', sans-serif;

	transition: all 0.2s ease-in-out;

	&:hover {
		/* opacity: 0.9; */
		color: ${({theme, variant}) => isCondensed(variant) ? '#fff' : theme.colors.secondary};
		background: ${({theme, variant}) => isCondensed(variant) ? theme.colors.secondary : 'transparent'};
		border: ${({theme, variant}) => isCondensed(variant) ? 'none' : 'solid 3px' + theme.colors.secondary};
	}
`;

export const Loader = styled(BeatLoader).attrs({
  size: 8,
  margin: 2,
})``;
