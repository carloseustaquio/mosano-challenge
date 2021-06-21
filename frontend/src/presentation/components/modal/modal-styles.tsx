import styled from 'styled-components';

export const Container = styled.div<{show: boolean}>`
  position: fixed;
  top: ${(props) => props.show ? '50%' : '20%'};
  left: 50%;
  opacity: ${(props) => props.show ? 1 : 0};
  background: ${({theme}) => theme.colors.gradients.background};
  transform: translate(-50%, -50%);
  padding: clamp(32px, 48px, 64px);
  transition: top 0.4s ease-out, opacity 0.5s ease-in-out;
  z-index: 10;
  box-sizing: content-box;
`;

export const Background = styled.div<{show: boolean}>`
  background-color: rgba(0, 0, 0, 0.55);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: ${(props) => props.show ? 'block' : 'none'};
  z-index: 5;
`;
