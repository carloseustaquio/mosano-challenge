import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-evenly;

	.pen {
		width: 16px;

		&:hover{
			rect, path, polygon {
				fill: ${({theme}) => theme.colors.warning};
			}
		}
	}

	.trash {
		margin-top: 3px;
		width: 18px;
		&:hover {
			stroke: ${({theme}) => theme.colors.error};
		}
	}
`;

export const Img = styled.img`
	width: 16px;
	cursor: pointer;
`;
