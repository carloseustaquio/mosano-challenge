import styled from 'styled-components';

export const Container = styled.div`
	max-width: 100%;
	overflow-x: auto;

	table {
		width: 100%;
		height: min-content;
		text-align: left;
		border-collapse: collapse;

		td, th {
			border: 1px solid #eee;
			padding: 6px 6px;
		}

		thead {
			background: #fafafa;

			th {
				color: ${({theme}) => theme.colors.text};
				font-size: 18px;
				font-weight: bold;
				text-align: left;
				border-left: 1px solid #eee;
				font-family: 'Poppins', sans-serif;
				font-weight: 400;

				&:first-child {
					border-left: none;
				}
			}
		}

		tbody {
			tr {
				cursor: pointer;
				&:hover {
					background: #f5f5f5;
				}
			}

			td {
				font-size: 16px;
			}
		}

	}
`;
