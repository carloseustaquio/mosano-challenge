import styled from 'styled-components';
import {Form as BaseForm} from 'formik';

export const Form = styled(BaseForm)`
	display: flex;
	flex-flow: column;
	row-gap: 8px;

	> h3 {
		margin-bottom: 16px;
	}
`;

export const ButtonWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	flex-flow: column;
`;

export const LoginError = styled.span`
	text-align: center;
	margin-top: 16px;
	font-size: 16px;
`;
