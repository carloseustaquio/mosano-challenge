import styled from 'styled-components';
import {BeatLoader} from 'react-spinners';

import {isCondensed, Variants} from './button';

export const Container = styled.button<{variant: Variants}>`
	cursor: pointer;
	outline: none;
	box-sizing: border-box;
	color: ${({theme, variant}) => isCondensed(variant) ? '#fff' : theme.colors.primary};
	background: ${({theme, variant}) => isCondensed(variant) ? theme.colors.primary : 'transparent'};
	border: ${({theme, variant}) => isCondensed(variant) ? 'none' : 'solid 3px' + theme.colors.primary};
	border-radius: 4px;
	padding: 8px 32px;
	transition: all 0.2s ease-in-out;
	text-transform: uppercase;

	&:hover {
		opacity: 0.9;
	}
`;

export const Loader = styled(BeatLoader).attrs({
  size: 8,
  margin: 2,
})``;
