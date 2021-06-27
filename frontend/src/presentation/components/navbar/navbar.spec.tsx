import {fireEvent, screen} from '@testing-library/react';
import {internet} from 'faker';

import {testHelper} from '#/presentation/tests/test-helpers';
import {EN_TRANSLATION} from '#/presentation/translation/locales/en';
import {PT_TRANSLATION} from '#/presentation/translation/locales/pt';
import {loginAction} from '#/state/slices/application';

import {Navbar} from './navbar';

const makeSut = () => testHelper(<Navbar />);

describe('Navbar', () => {
  it('should render logo, translation and login buttons', async () => {
    makeSut();
    const img = await screen.findByAltText('Mosano Logo');
    const label = await screen.findByTestId('logo-label');
    const loginLink = await screen.findByTestId('login-link');
    const ptTranslateToggle = await screen.findByAltText('translate-toggle-pt');
    const enTranslateToggle = await screen.findByAltText('translate-toggle-en');

    expect(img).toBeDefined();
    expect(label).toBeDefined();
    expect(loginLink).toBeDefined();
    expect(ptTranslateToggle).toBeDefined();
    expect(enTranslateToggle).toBeDefined();
  });

  it('should change translation when button is clicked', async () => {
    makeSut();
    const label = await screen.findByTestId('logo-label');
    const loginLink = await screen.findByTestId('login-link');

    const ptTranslateToggle = await screen.findByAltText('translate-toggle-pt');
    fireEvent.click(ptTranslateToggle);
    expect(label).toHaveTextContent(PT_TRANSLATION.challenge);
    expect(loginLink).toHaveTextContent(PT_TRANSLATION.login);

    const enTranslateToggle = await screen.findByAltText('translate-toggle-en');
    fireEvent.click(enTranslateToggle);
    expect(label).toHaveTextContent(EN_TRANSLATION.challenge);
    expect(loginLink).toHaveTextContent(EN_TRANSLATION.login);
  });

  it('should render logout button if is logged', async () => {
    const {resolvedStore} = makeSut();
    const loginParams = {email: internet.email(), password: internet.password()};
    resolvedStore.dispatch(loginAction(loginParams));
    const logoutLink = await screen.findByTestId('logout-link');
    expect(logoutLink).toBeDefined();
  });
});
