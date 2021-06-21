declare module 'styled-components' {
  export interface DefaultTheme {
		colors: {
			primary: string,
			secondary: string,
			text: string,
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
    secondary: '#e31c79',
    text: '#0c0d44',
    gradients: {
      background:
				'linear-gradient(188deg, hsla(0, 0%, 100%, 0), ' +
				'rgba(141, 144, 255, .3)), linear-gradient(180deg, #fff, #fff)',
      main: 'linear-gradient(180deg, #1e22aa, #e31c79)',
    },
  },
};
