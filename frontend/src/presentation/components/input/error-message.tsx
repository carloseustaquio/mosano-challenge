import {ErrorMessage as BaseErrorMessage, ErrorMessageProps} from 'formik';
import styled from 'styled-components';

const Wrapper = styled.span`
  font-family: sans-serif;
  color: ${(props) => props.theme.colors.error};
  font-size: 13px;
  line-height: 8px;
	margin: 0 0 4px 4px;
`;

export const ErrorMessage = (props: ErrorMessageProps) => (
  <Wrapper>
    <BaseErrorMessage {...props} />
  </Wrapper>
);

export default ErrorMessage;
