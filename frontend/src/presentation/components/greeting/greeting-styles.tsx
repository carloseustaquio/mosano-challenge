import styled from 'styled-components';

export const Container = styled.div<{show: boolean}>`
	background: ${({theme}) => theme.colors.gradients.main};
	width: fit-content;
	border-radius: 8px;
	margin: 0 auto;
	padding: 0 32px;
	opacity: 0.85;
	display: flex;
	align-items: center;
	cursor: pointer;
	height: ${({show}) => show ? 150 : 0}px;
	transition: height 0.2s ease-in-out;

	div {
		text-align: center;
		color: #fff;
		font-family: 'Poppins', sans-serif; 
	}

	@media screen and (min-width: 550px) {
		height: ${({show}) => show ? 90 : 0}px;
	}

	@media screen and (min-width: 900px) {
		height: ${({show}) => show ? 60 : 0}px;
	}
`;
