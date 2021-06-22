import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
 	display: flex;
  align-items: center;
  max-width: 100%;
	background-color: #fff;
  box-shadow: 1px 1px 11px -8px rgba(0,0,0,0.4);
  border: solid 1px rgba(0,0,0,0.1);

  input {
    border: none;
    outline: none;
    background: inherit;
  	color: ${({theme}) => theme.colors.text};
    font-size: 16px;
    padding: 8px 0 8px 14px;
    flex-grow: 1;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-size: 16px;
      -webkit-text-fill-color: ${({theme}) => theme.colors.text};
    }

		&::placeholder {
  	 color: ${({theme}) => theme.colors.lightText};
		}
  }
`;
