import {fireEvent, screen} from '@testing-library/react';
import {ReactElement} from 'react';

import {testHelper} from '#/presentation/tests/test-helpers';

import {Screen} from './screen';

const makeSut = (
  children: ReactElement = <div data-testid='children'></div>,
) => testHelper(<Screen>{children}</Screen>);

describe('Screen', () => {
  it('should render screen container, navbar, main and footer', async () => {
    makeSut();
    const container = screen.getByTestId('screen-container');
    const navbar = screen.getByTestId('navbar-container');
    const main = screen.getByRole('main');
    const footer = screen.getByTestId('footer-container');
    const children = screen.getByTestId('children');
    const modalContainer = screen.getByTestId('modal-container');
    const modalBackground = screen.getByTestId('modal-background');

    expect(container).toBeDefined();
    expect(navbar).toBeDefined();
    expect(main).toBeDefined();
    expect(footer).toBeDefined();
    expect(children).toBeDefined();
    expect(modalContainer).toHaveStyle('opacity: 0');
    expect(modalBackground).toHaveStyle('display: none');
  });

  it('should display login modal when login button is clicked', async () => {
    makeSut();
    const navbarLoginButton = screen.getByTestId('login-link');
    fireEvent.click(navbarLoginButton);
    const modalContainer = screen.getByTestId('modal-container');
    const modalBackground = screen.getByTestId('modal-background');
    expect(modalContainer).toHaveStyle('opacity: 1');
    expect(modalBackground).toHaveStyle('display: block');
  });
});
