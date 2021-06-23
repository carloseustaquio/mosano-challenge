import styled from 'styled-components';

import {Card as BaseCard} from '#/presentation/components/card/card';

export const Card = styled(BaseCard)`
	display: grid;
	grid-template-columns: 3fr 4fr;
	grid-gap: 60px;
	grid-template-rows: auto auto;
`;

export const GreetingWrapper = styled.div`
	grid-column: 1/3;
`;
