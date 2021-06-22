import styled from 'styled-components';

export const Container = styled.div`
	width: max-content;

	div {
		display: flex;
		margin-top: 16px;
		justify-content: center;
		
		> button {
			text-transform: uppercase;
			margin: 0 5px;
		}
	}
`;
