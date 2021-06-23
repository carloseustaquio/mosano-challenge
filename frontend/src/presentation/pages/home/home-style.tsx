import styled from 'styled-components';

import {Card as BaseCard} from '#/presentation/components/card/card';

export const Card = styled(BaseCard)`
	flex-flow: column;
`;

export const FormAndTableWrapper = styled.div`
	display: flex;
	gap: 60px;

	div:first-child {
		flex: 3;
	}

	div:last-child {
		flex: 4;
		margin-top: 8px;
	}

	@media screen and (max-width: 768px) {
		flex-flow: column;
	}
`;

export const GreetingWrapper = styled.div`
	padding-top: 40px;
`;
