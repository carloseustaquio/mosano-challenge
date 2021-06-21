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
		color: ${({theme}) => theme.colors.primary};
		margin-top: 5px;
		font-size: 20px;
		letter-spacing: 5px;
	}
`;

export const LoginLink = styled.a`
	color: ${({theme}) => theme.colors.primary};
	cursor: pointer;
	margin-right: 16px;
	width: 70px;
	text-align: center;
	text-transform: uppercase;
	font-size: 16px;

	&:hover {
		font-weight: 600;
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
	flex-flow: column;
	column-gap: 8px;

	@media screen and (min-width: 450px) {
		flex-flow: row;
	}
`;

export const LeftSide = styled.div`
	display: flex;
	column-gap: 16px;
	align-items: center;
`;
