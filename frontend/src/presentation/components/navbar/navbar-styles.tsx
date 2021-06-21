import styled from 'styled-components';

export const Container = styled.nav`
	height: 80px;
	margin-top: 16px;
	padding: 0 5%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	img {
		margin-top: 16px;
		height: 32px;
	}
	p {
		margin-top: 5px;
		font-size: 20px;
		letter-spacing: 5px;
	}
`;

export const LoginLink = styled.a`
	color: ${({theme}) => theme.colors.text};
	cursor: pointer;
	margin-right: 16px;
	width: 50px;
	text-align: center;

	&:hover {
		text-decoration: underline;
	}
`;

export const Language = styled.img`
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`;

export const LanguagesWrapper = styled.div`
	display: flex;
	column-gap: 8px;
`;

export const LeftSide = styled.div`
	display: flex;
	column-gap: 16px;
`;
