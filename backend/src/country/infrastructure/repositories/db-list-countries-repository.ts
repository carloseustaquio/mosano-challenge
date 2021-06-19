import {Country} from '#/country/domain/entities/country';
import {ListCountriesRepository} from '#/country/domain/repositories/list-countries-repository';

export class DbListCountriesRepository implements ListCountriesRepository {
  public async getCountries(): Promise<Country[]> {
    const countries = [new Country('1', 'Brasil'), new Country('2', 'Portugal')];
    return Promise.resolve(countries);
  }
}
