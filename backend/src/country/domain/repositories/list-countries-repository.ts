import {Country} from '#/country/domain/entities/country';

export interface ListCountriesRepository {
	getCountries(): Promise<Country[]>;
}
