import {Country} from '#/domain/entities/country';

export interface CountryUseCases {
	getCountries(): Promise<Country[]>;
}
