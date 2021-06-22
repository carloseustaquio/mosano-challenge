import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	max-width: 1000px;
	background-color: #fff;
	border-radius: 4px;
	margin: 80px auto;
	padding: 32px 24px;
	display: flex;

	@media screen and (min-width: 450px) {
		padding: 48px;
	}
`;
