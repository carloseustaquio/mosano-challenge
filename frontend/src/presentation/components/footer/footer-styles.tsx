import styled from 'styled-components';

export const Container = styled.div`
	background: ${({theme}) => theme.colors.text};
	height: 32px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	small {
		color: #fff;
		font-size: 14px;
	}
`;
