import {Country} from '#/country/domain/entities/country';
import {ListCountriesRepository} from '#/country/domain/repositories/list-countries-repository';
import {CountryModel} from '#/country/infrastructure/models/country-model';

export class DbListCountriesRepository implements ListCountriesRepository {
  private readonly model = CountryModel
  public async getCountries(): Promise<Country[]> {
	  const countries = await this.model.find();
	  return countries.map((country) => country.toDomain());
  }
}
