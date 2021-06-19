import {ListCountriesRepository} from '#/country/domain/repositories/list-countries-repository';
import {Country} from '#/country/domain/entities/country';

export class ListCountriesCommand {
	public onSuccess!: (countries: Country[]) => void;

	public onError!: (error: Error) => void;

	public constructor(private listCountriesRepository: ListCountriesRepository) {}

	public async getCountries(): Promise<void> {
	  try {
	    console.log(this.listCountriesRepository);
	    const countries = await this.listCountriesRepository.getCountries();
	    this.onSuccess(countries);
	  } catch (error) {
	    this.onError(error);
	  }
	}
}
