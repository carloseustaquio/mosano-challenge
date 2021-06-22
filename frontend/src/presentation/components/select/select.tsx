import styled from 'styled-components';

import ErrorMessage from '#/presentation/components/input/error-message';

export const Container = styled.div<{disabledStyle: boolean}>`
  border-radius: 4px;
  overflow: hidden;
 	display: flex;
  align-items: center;
  max-width: 100%;
	background-color: #fff;
  box-shadow: 1px 1px 11px -8px rgba(0,0,0,0.4);
  border: solid 1px rgba(0,0,0,0.1);

  select {
    border: none;
    outline: none;
    background: inherit;
  	color: ${({theme, disabledStyle}) => disabledStyle ? theme.colors.lightText : theme.colors.text};
    font-size: 16px;
    padding: 8px 0 8px 14px;
    flex-grow: 1;
  }
`;

type Props = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export const Select = (props: Props) => {
  const disabledStyle = !!props.placeholder && !props.value;
  return (
    <>
      <Container disabledStyle={disabledStyle}>
        <select {...props}>
          {props.placeholder && <option value="" disabled selected>{props.placeholder}</option>}
          {props.children}
        </select>
      </Container>
      <ErrorMessage name={props.name ?? ''} />
    </>
  );
};
