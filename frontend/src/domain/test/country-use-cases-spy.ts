import {CountryUseCases} from '#/domain/use-cases/country';
import {Country} from '#/domain/entities/country';

import {mockCountryList} from './mock-country';

class CountryUseCasesSpy implements CountryUseCases {
  error?: Error

  result!: Country[]

  public async getCountries(): Promise<Country[]> {
    return this.result;
  }

  public withError(error: Error) {
    this.error = error;
  }

  public withResult(countries: Country[] = mockCountryList()) {
    this.result = countries;
  }
}

export const makeCountryUseCasesSpy = () => new CountryUseCasesSpy();
