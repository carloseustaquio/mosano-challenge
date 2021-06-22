import styled from 'styled-components';
import {Form as BaseForm} from 'formik';

export const Form = styled(BaseForm)`
	display: flex;
	flex-flow: column;
	row-gap: 8px;
	width: 45%;

	> h2 {
  	color: ${({theme}) => theme.colors.primary};
		margin-bottom: 16px;
	}
`;

export const ButtonWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: flex-end;
`;

export const LoginError = styled.span`
	text-align: center;
	margin-top: 16px;
	font-size: 16px;
`;
