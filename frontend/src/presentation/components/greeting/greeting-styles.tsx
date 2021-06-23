import styled from 'styled-components';

export const Container = styled.div<{show: boolean}>`
	background: ${({theme}) => theme.colors.gradients.main};
	width: fit-content;
	border-radius: 8px;
	margin: 0 auto;
	padding: 0 32px;
	opacity: 0.85;
	height: ${({show}) => show ? 60 : 0}px;
	display: flex;
	align-items: center;
	transition: height 0.2s ease-in-out;
	cursor: pointer;

	div {
		text-align: center;
		color: #fff;
		font-family: 'Poppins', sans-serif; 
	}
`;
