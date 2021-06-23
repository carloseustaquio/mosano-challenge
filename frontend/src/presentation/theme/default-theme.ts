declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      error: string,
      warning: string,
      text: string,
      lightText: string,
      gradients: {
        background: string,
        main: string,
      }
    }
  }
}

export const defaultTheme = {
  colors: {
    primary: '#1e22aa',
    secondary: '#632099',
    error: '#e31c79',
    warning: '#ffbb00',
    text: '#0c0d44',
    lightText: '#aaa',
    gradients: {
      background:
				'linear-gradient(188deg, hsla(0, 0%, 100%, 0), ' +
				'rgba(141, 144, 255, .3)), linear-gradient(180deg, #fff, #fff)',
      main: 'linear-gradient(90deg, #1e22aa, #e31c79)',
    },
  },
};
