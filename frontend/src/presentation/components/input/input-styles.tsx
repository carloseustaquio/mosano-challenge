import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
 	display: flex;
  align-items: center;
  padding: 0 0 0 14px;
  max-width: 100%;
	background-color: #fff;

  input {
    border: none;
    outline: none;
    background: inherit;
  	color: ${({theme}) => theme.colors.text};
    font-size: 0.9rem;
    padding: 8px 0;
    flex-grow: 1;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-size: 0.9rem;
      -webkit-text-fill-color: ${({theme}) => theme.colors.text};
    }

		&::placeholder {
  	 color: ${({theme}) => theme.colors.lightText};
		}
  }
`;
