import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {ReactElement} from 'react';
import {render} from '@testing-library/react';

import {store} from '#/state/store';
import {makeAuthenticationUseCasesSpy} from '#/domain/test/authentication-use-cases-spy';
import {makeCountryUseCasesSpy} from '#/domain/test/country-use-cases-spy';
import {makeUserUseCasesSpy} from '#/domain/test/user-use-cases-spy';
import {defaultTheme} from '#/presentation/theme/default-theme';

export const testHelper = (children: ReactElement) => {
  const useCases = {
    authenticationUseCases: makeAuthenticationUseCasesSpy(),
    countryUseCases: makeCountryUseCasesSpy(),
    userUseCases: makeUserUseCasesSpy(),
  };

  const resolvedStore = store(useCases);

  render(
    <Provider store={resolvedStore}>
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    </Provider>,
  );

  return {
    useCases,
    resolvedStore,
  };
};
